import React from 'react';
import {
  Typography,
  Grid,
} from '@mui/material';

const CartPageItemGridHeader: React.FC = () => (
  <Grid container sx={{ mb: 3 }} columnSpacing={5}>
    <Grid item xs={4}>
      <Typography variant="h5">Product</Typography>
    </Grid>
    <Grid item xs={2}>
      <Typography variant="h5">Price</Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h5">Amount</Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h5">Total</Typography>
    </Grid>
  </Grid>
);

export default CartPageItemGridHeader;
