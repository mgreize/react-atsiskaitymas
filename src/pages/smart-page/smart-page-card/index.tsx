import React from 'react';
import {
  Box,
  Paper,
} from '@mui/material';

import { Item } from '../../../types';
import Img from '../../../components/img';
import ManPageCardProperties from './smart-page-card-properties';
import ManPageCardActions from './smart-page-card-actions';
import toReadCase from '../../../helpers/to-read-case';

type ShopPageCardProps = Item;

const SmartPageCard: React.FC<ShopPageCardProps> = ({
  id,
  images,
  price,
  categories,
  amount,
  additionalProps = {},
}) => {
  const itemProperties = [
    { name: 'Price', value: `${price}€` },
    { name: 'Categories', value: categories.join(', ') },
    { name: 'Amount', value: String(amount) },
    ...Object.entries(additionalProps).map(([name, value]) => ({
      name: toReadCase(name),
      value,
    })),
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
        <ManPageCardProperties properties={itemProperties} />
        <ManPageCardActions
          id={id}
          inStock={amount}
        />
      </Box>
    </Paper>
  );
};

export default SmartPageCard;