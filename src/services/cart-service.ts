import ApiService, { formatError } from './api-service';
import { CartItemPopulated } from '../types/cart-item-populated';
import { CartItem, CartItemProps } from '../types';

const fetchCartItems = async (token: string): Promise<CartItemPopulated[]> => {
  try {
    const { data } = await ApiService.get<{ cartItems: CartItemPopulated[] }>(
      '/api/cart',
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return data.cartItems;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const updateCartItem = async (
  cartItemId: string,
  cartItemProps: CartItemProps,
  token: string,
): Promise<CartItem> => {
  try {
    const { data } = await ApiService.patch<{ cartItem: CartItem }>(
      `/api/cart/update-item/${cartItemId}`,
      cartItemProps,
      {
        headers: {
          Authorization: token,
        },
      },
    );

    return data.cartItem;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const CartService = {
  fetchCartItems,
  updateCartItem,
};

export default CartService;
