import {REQUEST_PENDING, 
        REQUEST_SUCCESS, 
        REQUEST_FAILED,  
        INITIAL_IS_PENDING,
        RESET,
        LOGOUT_REQUEST_PENDING,
        LOGOUT_REQUEST_SUCCESS,
        FACE_DETECT_COUNT
    } from '../constants';

const initialData={
    data:{},
    isPending: false,
    logoutIsPending: false,
    //temp
    // isAuth: true,
    // initialIsPending: false
    isAuth: false,
    initialIsPending: true
}

export const formSubmitReducer = (state=initialData, action) => {
    switch (action.type) {
        case INITIAL_IS_PENDING:
            return {
                ...state,
                initialIsPending: false
            }
        case REQUEST_PENDING:
            return {
                ...state,
                isPending: true
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                initialIsPending: false,
                data: action.payload,
                isPending: false,
                isAuth: true
            }
        case REQUEST_FAILED:
            return {
                ...state,
                error: action.payload,
                isPending: false
            }
        case LOGOUT_REQUEST_PENDING:
            return {
                ...state,
                logoutIsPending: true
            }
        case LOGOUT_REQUEST_SUCCESS:
            return {
                ...state,
                logoutIsPending: false
            }
        case FACE_DETECT_COUNT:
            return {
                ...state,
                data: {
                    ...state.data,
                    user: {
                        ...state.data.user,
                        faceDetect: action.payload
                    }
                }
            }
        case RESET:
            return state = initialData;
        default:
            return state
    }
}