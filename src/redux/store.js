import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { formSubmitReducer } from './reducers/formSubmitReducer';
import { formHandlerReducer } from './reducers/formHandlerReducer';
import { dialogBoxReducer } from './reducers/dialogBoxReducer';
import { UrlHandlerReducer } from './reducers/UrlHandlerReducer';

const rootReducer = combineReducers({
        responseData: formSubmitReducer, 
        formData: formHandlerReducer,
        dialogData: dialogBoxReducer,
        urlData: UrlHandlerReducer
    })

export const store = process.env.NODE_ENV==="development" ? createStore(rootReducer,applyMiddleware(thunk,logger)) :createStore(rootReducer,applyMiddleware(thunk));
