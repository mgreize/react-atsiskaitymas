import React from 'react';
import { Box } from '@mui/material';
import CartPageItemGridHeader from './cart-page-item-grid-header';
import CartPageItemGridProduct from './cart-page-item-grid-product';
import { useRootSelector } from '../../../store/hooks';
import { selectCartJoinedItems } from '../../../store/selectors';

const CartPageItemGrid: React.FC = () => {
  const cartItems = useRootSelector(selectCartJoinedItems);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <CartPageItemGridHeader />
      {cartItems.map((cartItem) => (
        <CartPageItemGridProduct key={cartItem.id} {...cartItem} />
      ))}
    </Box>
  );
};

export default CartPageItemGrid;
