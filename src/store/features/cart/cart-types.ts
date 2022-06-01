import { CartItem } from '../../../types';
import { CartItemJoined } from '../../../types/cart-item-joined';

export type CartState = {
  items: CartItem[],
  joinedItems: CartItemJoined[],
  loading: boolean,
  error: string | null,
};

export enum CartActionType {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  CART_UPDATE_ITEM = 'CART_UPDATE_ITEM',
  CART_DELETE_ITEM = 'CART_DELETE_ITEM',
  CART_FETCH_ITEMS_LOADING = 'CART_FETCH_ITEMS_LOADING',
  CART_FETCH_ITEMS_SUCCESS = 'CART_FETCH_ITEMS_SUCCESS',
  CART_FETCH_ITEMS_FAILURE = 'CART_FETCH_ITEMS_FAILURE',
}

export type CartFetchItemsLoadingAction = {
  type: CartActionType.CART_FETCH_ITEMS_LOADING,
};

export type CartFetchItemsSuccessAction = {
  type: CartActionType.CART_FETCH_ITEMS_SUCCESS,
  payload: {
    joinedItems: CartItemJoined[],
  }
};

export type CartFetchItemsFailureAction = {
  type: CartActionType.CART_FETCH_ITEMS_FAILURE,
  payload: {
    error: string,
  }
};

export type CartAddItemAction = {
  type: CartActionType.CART_ADD_ITEM,
  payload: {
    shopItemId: string,
    amount: number,
  }
};

export type CartUpdateItemAction = {
  type: CartActionType.CART_UPDATE_ITEM,
  payload: {
    cartItemId: string,
    amount: number,
  }
};

export type CartDeleteItemAction = {
  type: CartActionType.CART_DELETE_ITEM,
  payload: {
    cartItemId: string,
  }
};

export type CartAction = CartAddItemAction | CartUpdateItemAction | CartDeleteItemAction | CartFetchItemsLoadingAction | CartFetchItemsSuccessAction | CartFetchItemsFailureAction;
