import { Category, ProductPopulated } from '../../../types';

export type ShopState = {
  products: ProductPopulated[],
  categories: Category[],
  loading: boolean,
  error: string | null,
  categoryFilter: string | null,
};

export enum ShopActionType {
  SHOP_FETCH_PRODUCTS_LOADING = 'SHOP_FETCH_PRODUCTS_LOADING',
  SHOP_FETCH_PRODUCTS_SUCCESS = 'SHOP_FETCH_PRODUCTS_SUCCESS',
  SHOP_FETCH_PRODUCTS_FAILURE = 'SHOP_FETCH_PRODUCTS_FAILURE',
  SHOP_FETCH_CATEGORIES_LOADING = 'SHOP_FETCH_CATEGORIES_LOADING',
  SHOP_FETCH_CATEGORIES_SUCCESS = 'SHOP_FETCH_CATEGORIES_SUCCESS',
  SHOP_FETCH_CATEGORIES_FAILURE = 'SHOP_FETCH_CATEGORIES_FAILURE',
  SHOP_CHANGE_CATEGORY_FILTER = 'SHOP_CHANGE_CATEGORY_FILTER',
  SHOP_CLEAR_ERROR = 'SHOP_CLEAR_ERROR',
}

export type ShopFetchProductsLoadingAction = {
  type: ShopActionType.SHOP_FETCH_PRODUCTS_LOADING
};

export type ShopFetchProductsSuccessAction = {
  type: ShopActionType.SHOP_FETCH_PRODUCTS_SUCCESS,
  payload: {
    products: ProductPopulated[],
  }
};

export type ShopFetchProductsFailureAction = {
  type: ShopActionType.SHOP_FETCH_PRODUCTS_FAILURE,
  payload: {
    error: string,
  }
};

export type ShopFetchCategoriesLoadingAction = {
  type: ShopActionType.SHOP_FETCH_CATEGORIES_LOADING
};

export type ShopFetchCategoriesSuccessAction = {
  type: ShopActionType.SHOP_FETCH_CATEGORIES_SUCCESS,
  payload: {
    categories: Category[],
  }
};

export type ShopFetchCategoriesFailureAction = {
  type: ShopActionType.SHOP_FETCH_CATEGORIES_FAILURE,
  payload: {
    error: string,
  }
};

export type ShopClearErrorAction = {
  type: ShopActionType.SHOP_CLEAR_ERROR
};

export type ShopChangeCategoryFilterAction = {
  type: ShopActionType.SHOP_CHANGE_CATEGORY_FILTER,
  payload: {
    categoryFilter: string | null,
  }
};

export type ShopAction = ShopFetchProductsLoadingAction | ShopFetchProductsSuccessAction | ShopFetchProductsFailureAction | ShopFetchCategoriesLoadingAction | ShopFetchCategoriesSuccessAction | ShopFetchCategoriesFailureAction | ShopChangeCategoryFilterAction | ShopClearErrorAction;
