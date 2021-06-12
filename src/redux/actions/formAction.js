import {
    REQUEST_PENDING,
    REQUEST_SUCCESS,
    REQUEST_FAILED,
    IS_ALERT_OPEN
} from '../constants';

import { apiCallPost } from '../../apiCall/apicall';

export const formSubmit = (bodyData,route) => (dispatch)=> {
    dispatch({type: REQUEST_PENDING})
    apiCallPost(route,bodyData)
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
