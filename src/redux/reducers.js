import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_FAILED } from './constants';

const initialData={
    data:{},
    isPending: true
}

export const getDataReducer = (state=initialData, action) => {
    switch (action.type) {
        case REQUEST_PENDING:
            return {
                ...state,
                isPending: true
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isPending: false
            }
        case REQUEST_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}