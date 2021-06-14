import {
    LOGOUT,
    RESET,
    INITIAL_IS_PENDING,
    LOGOUT_REQUEST_PENDING,
    LOGOUT_REQUEST_SUCCESS
} from '../constants';

import { apiCallGet } from '../../apiCall/apicall';

export const logout = (route) => (dispatch) => {
    dispatch({type: LOGOUT_REQUEST_PENDING})
    apiCallGet(route)
        .then((res) => {
            if(res.successMsg) {
                dispatch({type: LOGOUT, payload: true})
                setTimeout(()=> {
                    dispatch({type: LOGOUT_REQUEST_SUCCESS})
                    dispatch({type: RESET})
                    dispatch({type: INITIAL_IS_PENDING})
                },1000)
            }
        })
}