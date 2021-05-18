import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { formSubmitReducer, formHandlerReducer } from './reducers';

const rootReducer = combineReducers({
        responseData: formSubmitReducer, 
        formData: formHandlerReducer
    })

export const store = createStore(rootReducer,applyMiddleware(thunk,logger));
