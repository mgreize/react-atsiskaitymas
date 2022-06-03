import React, { useEffect } from 'react';
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
  Alert,
} from '@mui/material';

import { useRootSelector, useRootDispatch } from '../../store/hooks';
import { selectShopError, selectShopItems, selectShopItemsLoading } from '../../store/selectors';
import { shopClearErrorAction, shopFetchItemsAction } from '../../store/smart-action-creator';
import WomanPageCard from './smart-page-card';

const SmartPage: React.FC = () => {
  const items = useRootSelector(selectShopItems);
  const itemsLoading = useRootSelector(selectShopItemsLoading);
  const error = useRootSelector(selectShopError);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(shopFetchItemsAction);
  }, []);

  let pageContent = (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="primary" size={60} />
    </Box>
  );

  if (!itemsLoading) {
    pageContent = items.length > 0 ? (
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid item key={item.id} md={4}>
            <WomanPageCard {...item} />
          </Grid>
        ))}
      </Grid>
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>No items, sorry.</Typography>;
  }

  return (
    <Box sx={{ bgcolor: 'grey.300', minHeight: 700 }}>
      <Container>
        <Typography component="h1" variant="h2" sx={{ py: 3, textAlign: 'center' }}>Smart watches</Typography>
        {error && (
        <Alert color="error" onClose={() => dispatch(shopClearErrorAction)}>{error}</Alert>
        )}
        {pageContent}
      </Container>
    </Box>
  );
};

export default SmartPage;
