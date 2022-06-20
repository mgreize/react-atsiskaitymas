/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { ShopState, ShopAction, ShopActionType } from './shop-types';

const initialState: ShopState = {
  categories: [],
  products: [],
  loading: false,
  error: null,
  categoryFilter: null,
};

const shopReducer: Reducer<ShopState, ShopAction> = (state = initialState, action) => {
  switch (action.type) {
    case ShopActionType.SHOP_FETCH_PRODUCTS_LOADING:
    case ShopActionType.SHOP_FETCH_CATEGORIES_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case ShopActionType.SHOP_FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    }

    case ShopActionType.SHOP_FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        categories: action.payload.categories,
      };
    }

    case ShopActionType.SHOP_FETCH_PRODUCTS_FAILURE:
    case ShopActionType.SHOP_FETCH_CATEGORIES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case ShopActionType.SHOP_CHANGE_CATEGORY_FILTER: {
      return {
        ...state,
        categoryFilter: action.payload.categoryFilter,
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
