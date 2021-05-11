import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import { getDataReducer } from './reducers';

export const store = createStore(getDataReducer,applyMiddleware(logger,thunk));