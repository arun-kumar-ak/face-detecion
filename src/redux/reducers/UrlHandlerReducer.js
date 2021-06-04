import {IMG_URL,
        IS_URL,
        IMG_BOX_DATA,
        IMG_WIDTH
} from '../constants';

const initialUrl = {
    url: '',
    isUrl: false,
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
        case IS_URL:
            return {
                ...state,
                isUrl: true
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
        default:
            return state;
    }
}