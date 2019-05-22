import { createStore, combineReducers } from 'redux';
import ecommerce from './reducers/ecommerce';

const rootReducer = combineReducers({
  ecommerce: ecommerce
});

const store = createStore(rootReducer);

export default store;
