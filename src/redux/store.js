import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { formSubmitReducer, formHandlerReducer, dialogBoxReducer } from './reducers';

const rootReducer = combineReducers({
        responseData: formSubmitReducer, 
        formData: formHandlerReducer,
        dialogData: dialogBoxReducer
    })

export const store = createStore(rootReducer,applyMiddleware(thunk,logger));
