import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
} from '@mui/material';
import CartPageItemGrid from './cart-page-item-grid';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectCartItemsCount } from '../../store/features/cart/cart-selectors';
import { cartFetchItemsAction } from '../../store/action-creators';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();
  const itemsCount = useRootSelector(selectCartItemsCount);

  useEffect(() => {
    dispatch(cartFetchItemsAction);
  }, []);

  return (
    <Box sx={{ bgcolor: 'grey.300', minHeight: '93vh' }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography component="h1" variant="h2" sx={{ py: 3, mb: 5 }}>Cart</Typography>
        {itemsCount > 0 ? <CartPageItemGrid /> : (
          <>
            <Typography variant="h3" sx={{ mb: 10 }}>Cart is empty</Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/shop')}
              sx={{
                color: 'common.white',
                bgcolor: 'primary.main',
                height: 80,
                width: 250,
              }}
            >
              Choose Watch

            </Button>
          </>
        )}

      </Container>
    </Box>
  );
};

export default CartPage;
