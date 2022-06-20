import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectShopCategories } from '../../store/features/shop/shop-selectors';
import { shopFetchCategoriesActionThunk } from '../../store/features/shop/shop-action-creators';
import CategoryCard from './category-card';

const HomePage: React.FC = () => {
  const dispatch = useRootDispatch();
  const categories = useRootSelector(selectShopCategories);

  useEffect(() => {
    dispatch(shopFetchCategoriesActionThunk);
  }, []);

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        backgroundImage: 'url(/watches.jpg)',
        minHeight: '91vh',
        backgroundPosition: '35% 25%',
      }}
      >
        <Typography sx={{ fontSize: 40, mr: 10, color: 'primary.main' }}>Naujausi laikrožiai už geriausią kainą</Typography>
      </Box>
      <Box sx={({ palette }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        alignItems: 'center',
        minHeight: 600,
        px: 20,
        backgroundImage: `linear-gradient(to right, ${palette.primary.light}, ${palette.primary.dark})`,
      })}
      >
        {categories.map((cat) => <CategoryCard key={cat.id} {...cat} />)}
      </Box>
    </Box>

  );
};

export default HomePage;
