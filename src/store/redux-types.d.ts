import { ThunkDispatch } from 'redux-thunk';
import { AuthState, AuthAction } from './features/auth/auth-types';
import { CartState, CartAction } from './features/cart/cart-types';
import { NavigationState, NavigationAction } from './features/navigation/navigation-types';
import { ShopState, ShopAction } from './features/shop/shop-types';

export type RootState = {
  auth: AuthState,
  cart: CartState,
  navigation: NavigationState,
  shop: ShopState,
};

export type AppAction = AuthAction | CartAction | NavigationAction | ShopAction;

export type AppDispatch = ThunkDispatch<RootState, undefined, AppAction>;
