import {
    IMG_URL,
    URL_REQUEST_PENDING,
    IMG_BOX_DATA,
    IMG_WIDTH,
    RESET,
    URL_REQUEST_SUCCESS
} from '../constants';

const initialUrl = {
    url: '',
    urlIsPending: false,
    imgBoxData: {},
    imgWidth: 0
}

export const UrlHandlerReducer = (state = initialUrl, action) => {
    switch (action.type) {
        case IMG_URL:
            return {
                ...state,
                url: action.payload
            }
        case IMG_BOX_DATA:
            return {
                ...state,
                imgBoxData: action.payload
            }
        case IMG_WIDTH:
            return {
                ...state,
                imgWidth: action.payload
            }
        case URL_REQUEST_PENDING:
            return {
                ...state,
                urlIsPending: true
            }
        case URL_REQUEST_SUCCESS:
            return {
                ...state,
                urlIsPending: false
            }
        case RESET:
            return state = initialUrl;
        default:
            return state;
    }
}