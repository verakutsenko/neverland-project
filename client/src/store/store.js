import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage';

import waitlist from "reducers/waitlist";

const persistConfig = {
  key: 'root',
  storage
}

const rootReducers = combineReducers({
  waitlist,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
const persistor = persistStore(store);

export default { store, persistor };