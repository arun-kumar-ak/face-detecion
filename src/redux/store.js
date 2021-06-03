import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { formSubmitReducer, formHandlerReducer, dialogBoxReducer, UrlHandlerReducer } from './reducers';

const rootReducer = combineReducers({
        responseData: formSubmitReducer, 
        formData: formHandlerReducer,
        dialogData: dialogBoxReducer,
        urlData: UrlHandlerReducer
    })

export const store = createStore(rootReducer,applyMiddleware(thunk,logger));
