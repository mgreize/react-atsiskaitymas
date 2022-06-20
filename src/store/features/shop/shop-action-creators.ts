import { Dispatch } from 'redux';
import ShopService from '../../../services/shop-service';
import { Category, ProductPopulated } from '../../../types';
import { AppAction, RootState } from '../../redux-types';
import {
  ShopChangeCategoryFilterAction,
  ShopActionType,
  ShopFetchProductsLoadingAction,
  ShopFetchProductsSuccessAction,
  ShopFetchProductsFailureAction,
  ShopFetchCategoriesLoadingAction,
  ShopFetchCategoriesSuccessAction,
  ShopFetchCategoriesFailureAction,
  ShopClearErrorAction,
} from './shop-types';

const shopFetchProductsLoadingAction: ShopFetchProductsLoadingAction = {
  type: ShopActionType.SHOP_FETCH_PRODUCTS_LOADING,
};

const shopFetchCategoriesLoadingAction: ShopFetchCategoriesLoadingAction = {
  type: ShopActionType.SHOP_FETCH_CATEGORIES_LOADING,
};

export const shopClearErrorAction: ShopClearErrorAction = {
  type: ShopActionType.SHOP_CLEAR_ERROR,
};

const createShopFecthProductsSuccessAction = (products: ProductPopulated[]): ShopFetchProductsSuccessAction => ({
  type: ShopActionType.SHOP_FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

const createShopFetchProductsFailureAction = (error: string): ShopFetchProductsFailureAction => ({
  type: ShopActionType.SHOP_FETCH_PRODUCTS_FAILURE,
  payload: { error },
});

const createShopFecthCategoriesSuccessAction = (categories: Category[]): ShopFetchCategoriesSuccessAction => ({
  type: ShopActionType.SHOP_FETCH_CATEGORIES_SUCCESS,
  payload: { categories },
});

const createShopFetchCategoriesFailureAction = (error: string): ShopFetchCategoriesFailureAction => ({
  type: ShopActionType.SHOP_FETCH_CATEGORIES_FAILURE,
  payload: { error },
});

const createShopChangeCategoryFilterAction = (categoryFilter: string | null): ShopChangeCategoryFilterAction => ({
  type: ShopActionType.SHOP_CHANGE_CATEGORY_FILTER,
  payload: { categoryFilter },
});

export const shopFetchProductsActionThunk = async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): Promise<void> => {
  dispatch(shopFetchProductsLoadingAction);
  try {
    const { categoryFilter } = getState().shop;
    const products = await ShopService.fetchProducts(categoryFilter ?? undefined);
    const shopFecthProductsSuccessAction = createShopFecthProductsSuccessAction(products);
    dispatch(shopFecthProductsSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const shopFetchProductsFailureAction = createShopFetchProductsFailureAction(errMsg);
    dispatch(shopFetchProductsFailureAction);
  }
};

export const shopFetchCategoriesActionThunk = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(shopFetchCategoriesLoadingAction);
  try {
    const categories = await ShopService.fetchCategories();
    const shopFecthCategoriesSuccessAction = createShopFecthCategoriesSuccessAction(categories);
    dispatch(shopFecthCategoriesSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const shopFetchCategoriesFailureAction = createShopFetchCategoriesFailureAction(errMsg);
    dispatch(shopFetchCategoriesFailureAction);
  }
};

export const createShopChangeCategoryFilterActionThunk = (categoryId: string | null, preventLoading = false) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): Promise<void> => {
  const shopChangeCategoryFilterAction = createShopChangeCategoryFilterAction(categoryId);
  dispatch(shopChangeCategoryFilterAction);
  if (!preventLoading) {
    await shopFetchProductsActionThunk(dispatch, getState);
  }
};
