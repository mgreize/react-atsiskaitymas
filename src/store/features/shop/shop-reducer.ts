/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { ShopState, ShopAction, ShopActionType } from './shop-types';

const initialState: ShopState = {
  items: [],
  loading: false,
  error: null,
};

const shopReducer: Reducer<ShopState, ShopAction> = (state = initialState, action) => {
  switch (action.type) {
    case ShopActionType.SHOP_FETCH_ITEMS_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case ShopActionType.SHOP_FETCH_ITEMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        items: action.payload.items,
      };
    }

    case ShopActionType.SHOP_FETCH_ITEMS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case ShopActionType.SHOP_CHANGE_ITEM_AMOUNT: {
      return {
        ...state,
        items: state.items.map((item) => (item.id === action.payload.id
          ? { ...item, amount: action.payload.amount }
          : item
        )),
      };
    }

    case ShopActionType.SHOP_CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    default: return state;
  }
};

export default shopReducer;
