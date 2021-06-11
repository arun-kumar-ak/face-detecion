import {IS_EMAIL,
        IS_PASSWORD,
        IS_CONFIRM_PASSWORD,
        IS_EMAIL_VALID,
        IS_SHOW_PASSWORD,
        IS_PASSWORD_VALID,
        IS_NAME,
        IS_ALERT_OPEN,
        LOGOUT,
        RESET,
        IS_PICTURE
    } from '../constants';
    
const initialFormData = {
    email: '',
    password: '',
    username: '',
    picture: '',
    logout: false,
    validation: {
        isConfirmPassword: '',
        isEmailValid: false,
        emailErrorMsg: '',
        isPasswordValid: false,
        passwordErrorMsg: '',
        showPassword: false,
        isAlertOpen: false,
        alertMsg: '',
        isAlertError: false
    }
}

export const formHandlerReducer = (state=initialFormData, action) => {
    switch (action.type) {
        case IS_NAME:
            return {
                ...state,
                username: action.payload
            }
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
        case IS_PICTURE:
            return {
                ...state,
                picture: action.payload
            }
        case IS_CONFIRM_PASSWORD:
            return {
                ...state,
                validation: {
                    ...state.validation,
                    isConfirmPassword: action.payload
                }
            }
        case IS_EMAIL_VALID:
            return {
                ...state,
                validation: {
                    ...state.validation,
                    isEmailValid: action.payload[0],
                    emailErrorMsg: action.payload[1]
                }
            }
        case IS_PASSWORD_VALID:
            return {
                ...state,
                validation: {
                    ...state.validation,
                    isPasswordValid: action.payload[0],
                    passwordErrorMsg: action.payload[1]
                }
            }
        case IS_SHOW_PASSWORD:
            return {
                ...state,
                validation: {
                    ...state.validation,
                    showPassword: action.payload
                }
            }
        case IS_ALERT_OPEN:
            return {
                ...state,
                validation: {
                    ...state.validation,
                    isAlertOpen: action.payload[0],
                    isAlertError: action.payload[1],
                    alertMsg: action.payload[2]
                }
            }            
        case RESET:
            return state = initialFormData
        case LOGOUT:
            return {
                ...state,
                logout: action.payload
            }
        default:
            return state
    }
}
