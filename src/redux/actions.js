import {
        REQUEST_PENDING,
        REQUEST_SUCCESS,
        REQUEST_FAILED 
        } from './constants';

const apiCall = (url,bodyData) => fetch(url,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    }).then(resp => resp.json())

export const formSubmit = (bodyData,route) => (dispatch)=> {
    dispatch({type: REQUEST_PENDING})
    apiCall(`http://localhost:3002/${route}`,bodyData)
        .then(res => {
            dispatch({type: REQUEST_SUCCESS, payload: res})
        })
        .catch(err => dispatch({type: REQUEST_FAILED, payload: err}))
}

export const formHandler = (data,type) => (dispatch) => {
    dispatch({type: type, payload: data})
}