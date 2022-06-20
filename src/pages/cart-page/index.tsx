import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
} from '@mui/material';
import CartPageItemGrid from './cart-page-item-grid';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectCartItemsCount } from '../../store/features/cart/cart-selectors';
import { cartFetchItemsActionThunk } from '../../store/action-creators';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();
  const itemsCount = useRootSelector(selectCartItemsCount);

  useEffect(() => {
    dispatch(cartFetchItemsActionThunk);
  }, []);

  return (
    <Container>
      <Typography component="h1" variant="h2" sx={{ my: 3, mb: 5 }}>Cart</Typography>
      {itemsCount > 0 ? <CartPageItemGrid /> : (
        <>
          <Typography variant="h3" sx={{ mb: 3 }}>Krepšelis tuščias 😒</Typography>
          <Button variant="contained" onClick={() => navigate('/shop')}>← Rinktis prekes</Button>
        </>
      )}

    </Container>
  );
};

export default CartPage;
