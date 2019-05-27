/**
 * *********************
 * 
 * @module ecommerce(reducer)
 * @author the3ddy
 * @date 5/22/2019
 * @description general reducer for main site
 * 
 * *********************
 */

// dependencies
import * as actions from '../actions/actionTypes';

// initialize state
const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SENDING_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}