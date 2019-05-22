/**
 * *********************
 * 
 * @module Store
 * @author the3ddy
 * @date 5/22/2019
 * @description combining reducers into a single store
 * 
 * *********************
 */

// dependencies
import { createStore, combineReducers } from 'redux';
// reducers
import ecommerce from './reducers/ecommerce';

// combining multiple reducers
const rootReducer = combineReducers({
  ecommerce: ecommerce
});

// creating the single store
const store = createStore(rootReducer);

export default store;
