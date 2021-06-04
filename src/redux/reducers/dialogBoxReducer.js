import {IS_DIALOG_OPEN} from '../constants';

//dialog box reducer
const initialDialogBox = {
    open: false
}

export const dialogBoxReducer = (state = initialDialogBox, action) => {
    switch (action.type) {
        case IS_DIALOG_OPEN:
            return {
                ...state,
                open: action.payload
            }
        default:
            return state
    }
}
