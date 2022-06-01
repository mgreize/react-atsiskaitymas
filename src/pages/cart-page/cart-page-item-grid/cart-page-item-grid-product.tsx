import React from 'react';
import {
  Typography,
  Grid,
  IconButton,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartItemJoined } from '../../../types';
import Img from '../../../components/img';
import NumberField from '../../../components/number-field';

type CartPageItemGridProductProps = CartItemJoined;

const CartPageItemGridProduct: React.FC<CartPageItemGridProductProps> = (props) => (
  <Grid container columnSpacing={5}>
    <Grid item xs={4} sx={{ display: 'flex', gap: 1 }}>
      <Img
        src="https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g="
        alt=""
        sx={{ width: 120, height: 120 }}
      />
      <Box>Čia yra papildoma informacija</Box>
    </Grid>
    <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6">19.99 $</Typography>
    </Grid>
    <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
      <NumberField buttonsSx={{ width: 30 }} />
    </Grid>
    <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6">19.99 $</Typography>
    </Grid>
    <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton size="large">
        <DeleteIcon fontSize="large" />
      </IconButton>
    </Grid>
  </Grid>
);

export default CartPageItemGridProduct;
