/**
 * ************************************
 *
 * @module  types
 * @author  the3ddy
 * @date    5/26/19
 * @description provides constant values for action type strings
 *
 * ************************************
 */

export const SENDING_ITEMS = 'SENDING_ITEMS';
export const FETCHING_ITEMS = 'FETCHING_ITEMS';

// export interface Items {
//   [index: number]: 
// }

interface SendingItemsAction {
  type: typeof SENDING_ITEMS
  payload: Items
}

interface FetchingItemsAction {
  type: typeof FETCHING_ITEMS
}

export type ItemTypes = SendingItemsAction | FetchingItemsAction
