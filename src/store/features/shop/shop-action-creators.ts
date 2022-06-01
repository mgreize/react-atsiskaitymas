import { Dispatch } from 'redux';
import ShopService from '../../../services/shop-service';
import { Item } from '../../../types';
import { AppAction, RootState } from '../../redux-types';
import {
  ShopActionType,
  ShopFetchItemsLoadingAction,
  ShopFetchItemsSuccessAction,
  ShopFetchItemsFailureAction,
  ShopClearErrorAction,
  ShopChangeItemAmountAction,
} from './shop-types';

const shopFetchItemsLoadingAction: ShopFetchItemsLoadingAction = {
  type: ShopActionType.SHOP_FETCH_ITEMS_LOADING,
};

export const shopClearErrorAction: ShopClearErrorAction = {
  type: ShopActionType.SHOP_CLEAR_ERROR,
};

const createShopFecthItemsSuccessAction = (items: Item[]): ShopFetchItemsSuccessAction => ({
  type: ShopActionType.SHOP_FETCH_ITEMS_SUCCESS,
  payload: { items },
});

const createShopFetchItemsFailureAction = (error: string): ShopFetchItemsFailureAction => ({
  type: ShopActionType.SHOP_FETCH_ITEMS_FAILURE,
  payload: { error },
});

export const createShopChangeItemAmountAction = (id: string, amount: number): ShopChangeItemAmountAction => ({
  type: ShopActionType.SHOP_CHANGE_ITEM_AMOUNT,
  payload: { id, amount },
});

export const shopFetchItemsAction = async (dispatch: Dispatch<AppAction>, getState: () => RootState): Promise<void> => {
  dispatch(shopFetchItemsLoadingAction);
  try {
    const shopItems = await ShopService.fetchItems();
    const { cart: { items: cartItems } } = getState();

    // Tobulu atveju, visi skaičiavimai turėtų būti atliekami naudojant service'us arba helper'ius
    const reducedShopItems = shopItems.map((shopItem) => {
      const shopItemCartItem = cartItems.find((cartItem) => cartItem.shopItemId === shopItem.id);

      if (shopItemCartItem) {
        return {
          ...shopItem,
          amount: shopItem.amount - shopItemCartItem.amount,
        };
      }
      return shopItem;
    });

    const shopFecthItemsSuccessAction = createShopFecthItemsSuccessAction(reducedShopItems);
    dispatch(shopFecthItemsSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const shopFetchItemsFailureAction = createShopFetchItemsFailureAction(errMsg);
    dispatch(shopFetchItemsFailureAction);
  }
};
