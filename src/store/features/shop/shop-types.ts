import { Item } from '../../../types';

export type ShopState = {
  items: Item[],
  loading: boolean,
  error: string | null,
};

export enum ShopActionType {
  SHOP_FETCH_ITEMS_LOADING = 'SHOP_FETCH_ITEMS_LOADING',
  SHOP_CLEAR_ERROR = 'SHOP_CLEAR_ERROR',
  SHOP_FETCH_ITEMS_SUCCESS = 'SHOP_FETCH_ITEMS_SUCCESS',
  SHOP_FETCH_ITEMS_FAILURE = 'SHOP_FETCH_ITEMS_FAILURE',
  SHOP_CHANGE_ITEM_AMOUNT = 'SHOP_CHANGE_ITEM_AMOUNT',
}

export type ShopFetchItemsLoadingAction = {
  type: ShopActionType.SHOP_FETCH_ITEMS_LOADING
};

export type ShopClearErrorAction = {
  type: ShopActionType.SHOP_CLEAR_ERROR
};

export type ShopFetchItemsSuccessAction = {
  type: ShopActionType.SHOP_FETCH_ITEMS_SUCCESS,
  payload: {
    items: Item[],
  }
};

export type ShopFetchItemsFailureAction = {
  type: ShopActionType.SHOP_FETCH_ITEMS_FAILURE,
  payload: {
    error: string,
  }
};

export type ShopChangeItemAmountAction = {
  type: ShopActionType.SHOP_CHANGE_ITEM_AMOUNT,
  payload: {
    id: string,
    amount: number
  },
};

export type ShopAction = ShopFetchItemsLoadingAction | ShopFetchItemsSuccessAction | ShopFetchItemsFailureAction | ShopChangeItemAmountAction | ShopClearErrorAction;
