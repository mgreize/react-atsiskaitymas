import React, { useEffect } from 'react';
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
  Alert,
} from '@mui/material';

import { useSearchParams } from 'react-router-dom';
import { useRootSelector, useRootDispatch } from '../../store/hooks';
import { selectShopError, selectShopProducts, selectShopLoading } from '../../store/selectors';
import { shopClearErrorAction, shopFetchProductsActionThunk } from '../../store/action-creators';
import ShopPageCard from './shop-page-card';
import ShopCategoryHeader from './shop-category-header';
import { shopFetchCategoriesActionThunk, createShopChangeCategoryFilterActionThunk } from '../../store/features/shop/shop-action-creators';

const ShopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const products = useRootSelector(selectShopProducts);
  const loading = useRootSelector(selectShopLoading);
  const error = useRootSelector(selectShopError);
  const dispatch = useRootDispatch();

  useEffect(() => {
    const categoryId = searchParams.get('categoryId');

    const shopProductFetchAction = categoryId
      ? createShopChangeCategoryFilterActionThunk(categoryId)
      : shopFetchProductsActionThunk;
    dispatch(shopFetchCategoriesActionThunk);

    dispatch(shopProductFetchAction);

    return () => {
      dispatch(createShopChangeCategoryFilterActionThunk(null, true));
    };
  }, []);

  let pageContent = (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="primary" size={60} />
    </Box>
  );

  if (!loading) {
    pageContent = products.length > 0 ? (
      <Grid container spacing={4}>
        {products.map((item) => (
          <Grid item key={item.id} xs={4}>
            <ShopPageCard {...item} />
          </Grid>
        ))}
      </Grid>
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>Parduotuvė tuščia.</Typography>;
  }

  return (
    <Container sx={{ mt: 6 }}>
      {error && (
        <Alert color="error" onClose={() => dispatch(shopClearErrorAction)}>{error}</Alert>
      )}
      <ShopCategoryHeader />
      {pageContent}
    </Container>
  );
};

export default ShopPage;
