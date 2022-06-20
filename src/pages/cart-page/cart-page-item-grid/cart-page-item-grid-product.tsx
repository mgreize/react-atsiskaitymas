import React from 'react';
import {
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartItemPopulated } from '../../../types';
import Img from '../../../components/img';
import NumberField from '../../../components/number-field';

type CartPageItemGridProductProps = CartItemPopulated;

const CartPageItemGridProduct: React.FC<CartPageItemGridProductProps> = ({
  product,
  amount,
}) => (
  <Grid container columnSpacing={5}>
    <Grid item xs={3} sx={{ display: 'flex', gap: 1 }}>
      <Img
        src={product.images[0]}
        alt=""
        sx={{ width: 120, height: 120 }}
      />
    </Grid>
    <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6">{`${product.price} €`}</Typography>
    </Grid>
    <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
      <NumberField buttonsSx={{ width: 30 }} value={amount} />
    </Grid>
    <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6">{`${product.price * amount} €`}</Typography>
    </Grid>
    <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton size="large">
        <DeleteIcon fontSize="large" />
      </IconButton>
    </Grid>
  </Grid>
);

export default CartPageItemGridProduct;
