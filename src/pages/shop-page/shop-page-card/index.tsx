import React from 'react';
import {
  Box,
  Paper,
} from '@mui/material';

import { ProductPopulated } from '../../../types';
import Img from '../../../components/img';
import ShopPageCardProperties from './shop-page-card-properties';
import ShopPageCardActions from './shop-page-card-actions';
import { useRootSelector } from '../../../store/hooks';
import { selectAuthLoggedIn } from '../../../store/features/auth/auth-selectors';

type ShopPageCardProps = ProductPopulated;

const ShopPageCard: React.FC<ShopPageCardProps> = ({
  id,
  title,
  images,
  price,
  categories,
}) => {
  const loggedIn = useRootSelector(selectAuthLoggedIn);

  const itemProperties = [
    { name: 'Pavadinimas', value: title },
    { name: 'Kaina', value: `${price}€` },
    { name: 'Kategorijos', value: categories.join(', ') },
  ];

  return (
    <Paper
      elevation={2}
      sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Img src={images[0]} alt="" sx={{ height: 300, width: '100%' }} />
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
        gap: 2,
      }}
      >
        <ShopPageCardProperties properties={itemProperties} />
        {loggedIn && <ShopPageCardActions id={id} />}
      </Box>
    </Paper>
  );
};

export default ShopPageCard;
