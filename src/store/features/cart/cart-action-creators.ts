/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'redux';
import CartService from '../../../services/cart-service';
import { CartItemPopulated } from '../../../types';
import { AppAction, RootState } from '../../redux-types';
import {
  CartFetchLoadingAction,
  CartFetchSuccessAction,
  CartFetchFailureAction,
  CartActionType,
} from './cart-types';

const cartFetchItemsLoadingAction: CartFetchLoadingAction = {
  type: CartActionType.CART_FETCH_LOADING,
};

const createCartFetchSuccessAction = (cartItems: CartItemPopulated[]): CartFetchSuccessAction => ({
  type: CartActionType.CART_FETCH_SUCCESS,
  payload: { items: cartItems },
});

const createCartFetchFailureAction = (error: string): CartFetchFailureAction => ({
  type: CartActionType.CART_FETCH_FAILURE,
  payload: { error },
});

export const cartFetchItemsActionThunk = async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): Promise<void> => {
  const { token } = getState().auth;
  try {
    if (token === null) {
      throw new Error('Prašome prisijungti');
    }
    dispatch(cartFetchItemsLoadingAction);
    // Siunčiama užklausa į serverį, kad parsiųsti visus CartItem'us
    const cartItems: CartItemPopulated[] = await CartService.fetchCartItems(token);

    const cartFetchItemsSuccessAction = createCartFetchSuccessAction(cartItems);
    dispatch(cartFetchItemsSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createCartFetchFailureAction(errMsg);
    dispatch(authFailureAction);
  }
};

export const createModifyCartItemActionThunk = (productId: string, amount: number) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): Promise<void> => {
  const { cart, auth: { token } } = getState();

  try {
    if (token === null) {
      throw new Error('Reikalingas prisijungimas');
    }

    const existingCartItem = cart.items.find((x) => x.product.id === productId);
    if (existingCartItem) {
      if (amount > 0) {
        // Siunčiama užklausa į serverį, kad atnaujinti egzistuojantį CartItem
        await CartService.updateCartItem(
          existingCartItem.id,
          { amount },
          token,
        );
        await cartFetchItemsActionThunk(dispatch, getState);
      } else {
        // trinimas
      }
    } else {
      // Siunčiama užklausa į serverį, kad sukurti CartItem
      // const cartAddItemAction = createCartAddItemAction(productId, newAmount);
      // dispatch(cartAddItemAction);
    }
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createCartFetchFailureAction(errMsg);
    dispatch(authFailureAction);
  }
};
