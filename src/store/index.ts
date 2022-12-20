import { legacy_createStore as createStore, combineReducers } from 'redux'

import { userReducer } from './reducerUser';

const rootReducer = combineReducers({userReducer});

const store = createStore(rootReducer);

export {store};

