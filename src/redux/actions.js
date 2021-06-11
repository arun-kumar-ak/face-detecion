import {
        REQUEST_PENDING,
        REQUEST_SUCCESS,
        REQUEST_FAILED,
        IS_ALERT_OPEN,
        IMG_BOX_DATA,
        INITIAL_IS_PENDING,
        LOGOUT,
        RESET,
        IS_NAME,
        IS_EMAIL,
        IS_PICTURE
        } from './constants';

var url = process.env.NODE_ENV === "development" ? process.env.REACT_APP_LOCAL_SERVER_URL : process.env.REACT_APP_SERVER_URL

const apiCallPost = (url,bodyData) => fetch(url,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        mode:'cors',
        credentials: 'include',
        body: JSON.stringify(bodyData)
    }).then(resp => {
        return resp.json()
    })

export const apiCallGet = (url) => fetch(url, {
            method: 'get',
            credentials: 'include',
            mode:'cors'
        }).then(resp => {
            return resp.json()
        })

export const authUser = (route) => (dispatch)=> {
    dispatch({type: REQUEST_PENDING})
    apiCallGet(url+route)
        .then(res => {
            if(res.errorMsg) {
                dispatch(formHandler([true,true,res.errorMsg], IS_ALERT_OPEN))
                dispatch({type: REQUEST_FAILED, payload: ''})
                dispatch({type: INITIAL_IS_PENDING})
            }

            if(res.nothing) {
                dispatch({type: REQUEST_FAILED, payload: ''})
                dispatch({type: INITIAL_IS_PENDING})
            }

            if(res.passwordNeed) {
                dispatch(formHandler([true,false,'Please set the password for future use'], IS_ALERT_OPEN))
                dispatch({type: REQUEST_FAILED, payload: ''})
                dispatch({type: INITIAL_IS_PENDING})
            }
            if(res.successMsg){
                dispatch({type: REQUEST_SUCCESS, payload: res})
                dispatch({type: INITIAL_IS_PENDING})
            }
        })
        .catch(err => {
            dispatch({type: REQUEST_FAILED, payload: err})
            dispatch({type: INITIAL_IS_PENDING})
        })
}

export const formSubmit = (bodyData,route) => (dispatch)=> {
    dispatch({type: REQUEST_PENDING})
    apiCallPost(`${url}${route}`,bodyData)
        .then(res => {
            if(res.errorMsg) {
                dispatch(formHandler([true,true,res.errorMsg], IS_ALERT_OPEN))
                dispatch({type: REQUEST_FAILED, payload: ''})
            }

            if(res.passwordNeed) {
                dispatch(formHandler([true,false,'Please set the password for future use'], IS_ALERT_OPEN))
                dispatch({type: REQUEST_FAILED, payload: ''})
            }

            if(res.successMsg){
                dispatch({type: REQUEST_SUCCESS, payload: res})
            }
        })
        .catch(err => dispatch({type: REQUEST_FAILED, payload: err}))
}

export const formHandler = (data,type) => ({type: type, payload: data})

export const faceDetect = (route) => (dispatch) => {
    dispatch({type: REQUEST_PENDING})
    apiCallGet(url+route)
        .then(res => {
            dispatch({type: IMG_BOX_DATA, payload: res})
        })
}

export const googleAuth = (route,bodyData,history) => (dispatch) => {
    dispatch({type: REQUEST_PENDING})
    apiCallPost(url+route, {email: bodyData.email})
        .then((res) => {
            if(res.successMsg){
                dispatch({type: REQUEST_SUCCESS, payload: res})
            }
            if(res.passwordNeed) {
                history.push('/register')
                dispatch(formHandler([true,false,'Please set the password for future use'], IS_ALERT_OPEN))
                dispatch({type: IS_NAME, payload: bodyData.name})
                dispatch({type: IS_EMAIL, payload: bodyData.email})
                dispatch({type: IS_PICTURE, payload: bodyData.imageUrl})
                dispatch({type: REQUEST_FAILED, payload: ''})
                
            }
        })
        .catch(err => dispatch({type: REQUEST_FAILED, payload: err}))
}

export const logout = (route) => (dispatch) => {
    apiCallGet(url+route)
        .then((res) => {
            if(res.successMsg) {
                dispatch({type: LOGOUT, payload: true})
                setTimeout(()=> {
                    dispatch({type: RESET})
                    dispatch({type: INITIAL_IS_PENDING})
                },1000)
            }
        })
}