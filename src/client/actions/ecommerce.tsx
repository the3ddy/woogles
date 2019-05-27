/**
 * ************************************
 *
 * @module  eCommerce(action-creators)
 * @author  the3ddy
 * @date    5/26/19
 * @description action creators for ecommerce
 *
 * ************************************
 */

import * as types from './types';
import { Items, SENDING_ITEMS, FETCHING_ITEMS, ItemTypes } from './types';

// action creator to fetch the items
export const fetchingItems = () => {
  return (dispatch, getState) => {
    fetch('/items')
      .then(data => data.json())
      .then(items => {
        dispatch(sendingItems(items));
      })
      .catch(err => {
        console.error(err);
      })
  }
};

// follow up action creator to send item list to reducer
export function sendingItems(newItems: Items): ItemTypes {
  return {
    type: SENDING_ITEMS,
    payload: newItems
  }
};

