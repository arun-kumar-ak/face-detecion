import {
        REQUEST_PENDING,
        REQUEST_SUCCESS,
        REQUEST_FAILED,
        IS_ALERT_OPEN,
        INITIAL_IS_PENDING
        } from './constants';

const apiCall = (url,bodyData) => fetch(url,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        // mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(bodyData)
    }).then(resp => {
        return resp.json()
    })

const auth = () => fetch('http://localhost:3002/authUser', {
            method: 'get',
            credentials: 'include'
        }).then(resp => {
            return resp.json()
        })

export const authUser = () => (dispatch)=> {
    dispatch({type: REQUEST_PENDING})
    auth()
        .then(res => {
            if(res.errorMsg) {
                dispatch(formHandler([true,true,res.errorMsg], IS_ALERT_OPEN))
                dispatch({type: REQUEST_FAILED, payload: ''})
                dispatch({type: INITIAL_IS_PENDING})
            }

            if(res.passwordNeed) {
                dispatch(formHandler([true,false,'Please set the password for future use'], IS_ALERT_OPEN))
                dispatch({type: REQUEST_FAILED, payload: ''})
                dispatch({type: INITIAL_IS_PENDING})
            }
            if(res.successMsg){
                dispatch({type: REQUEST_SUCCESS, payload: res.user})
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
    apiCall(`http://localhost:3002/${route}`,bodyData)
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
