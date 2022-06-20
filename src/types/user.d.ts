import { CartItem } from './cart-item';

export type User = {
  id: string,
  email: string,
  role: 'user' | 'admin',
  cartItems: CartItem[],
  name?: string,
  surname?: string,
  img?: string,
};
