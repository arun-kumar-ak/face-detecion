import {
    LOGOUT,
    RESET,
    INITIAL_IS_PENDING
} from '../constants';

import { apiCallGet } from '../../apiCall/apicall';

export const logout = (route) => (dispatch) => {
    apiCallGet(route)
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