import {
    URL_REQUEST_PENDING,
    IMG_BOX_DATA,
    URL_REQUEST_SUCCESS,
    FACE_DETECT_COUNT
} from '../constants';

import { apiCallGet } from '../../apiCall/apicall';

export const faceDetect = (route) => (dispatch) => {
    dispatch({type: URL_REQUEST_PENDING})
    apiCallGet(route)
        .then(res => {
            dispatch({type: URL_REQUEST_SUCCESS})
            dispatch({type: IMG_BOX_DATA, payload: {boxData: res.boxData}})
            dispatch({type: FACE_DETECT_COUNT, payload: res.faceDetect})
        })
}