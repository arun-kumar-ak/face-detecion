import {
    REQUEST_PENDING,
    IMG_BOX_DATA
} from '../constants';

import { apiCallGet } from '../../apiCall/apicall';

export const faceDetect = (route) => (dispatch) => {
    dispatch({type: REQUEST_PENDING})
    apiCallGet(route)
        .then(res => {
            dispatch({type: IMG_BOX_DATA, payload: res})
        })
}