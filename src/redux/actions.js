import {
        REQUEST_PENDING,
        REQUEST_SUCCESS,
        REQUEST_FAILED,
        IS_ALERT_OPEN
        } from './constants';

const apiCall = (url,bodyData) => fetch(url,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        // mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(bodyData)
    }).then(resp => resp.json())

export const formSubmit = (bodyData,route) => (dispatch)=> {
    dispatch({type: REQUEST_PENDING})
    apiCall(`http://localhost:3002/${route}`,bodyData)
        .then(res => {
            if(res.errorMsg) {
                dispatch(formHandler([true,true,res.errorMsg], IS_ALERT_OPEN))
            }

            if(res.passwordNeed) {
                dispatch(formHandler([true,false,'Please set the password for future use'], IS_ALERT_OPEN))
            }

            dispatch({type: REQUEST_SUCCESS, payload: res})
        })
        .catch(err => dispatch({type: REQUEST_FAILED, payload: err}))
}

export const formHandler = (data,type) => (dispatch) => {
    dispatch({type: type, payload: data})
}