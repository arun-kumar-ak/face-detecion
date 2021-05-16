import {    REQUEST_PENDING, 
            REQUEST_SUCCESS, 
            REQUEST_FAILED, 
            IS_EMAIL,
            IS_PASSWORD,
            IS_EMAIL_VALID,
            IS_SHOW_PASSWORD
        } from './constants';

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
const initialFormData = {
    email: '',
    password: '',
    validation: {
        isEmailValid: false,
        showPassword: false
    }
}

export const formHandlerReducer = (state=initialFormData, action) => {
    switch (action.type) {
        case IS_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case IS_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case IS_EMAIL_VALID:
            return {
                ...state,
                validation: {
                    isEmailValid: action.payload
                }
            }
        case IS_SHOW_PASSWORD:
            return {
                ...state,
                validation: {
                    showPassword: action.payload
                }
            }
        default:
            return state
    }
}