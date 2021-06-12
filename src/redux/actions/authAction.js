import {
    REQUEST_PENDING,
    REQUEST_SUCCESS,
    REQUEST_FAILED,
    IS_ALERT_OPEN,
    INITIAL_IS_PENDING,
    IS_NAME,
    IS_EMAIL,
    IS_PICTURE
} from '../constants';

import { apiCallGet, apiCallPost } from '../../apiCall/apicall';
import { formHandler } from './formAction'

export const authUser = (route) => (dispatch)=> {
    dispatch({type: REQUEST_PENDING})
    apiCallGet(route)
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

export const googleAuth = (route,bodyData,history) => (dispatch) => {
    dispatch({type: REQUEST_PENDING})
    apiCallPost(route, {email: bodyData.email})
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