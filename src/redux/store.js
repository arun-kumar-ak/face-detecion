import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { getDataReducer, formHandlerReducer } from './reducers';

const rootReducer = combineReducers({
        getData: getDataReducer, 
        formData: formHandlerReducer
    })

export const store = createStore(rootReducer,applyMiddleware(thunk,logger));
