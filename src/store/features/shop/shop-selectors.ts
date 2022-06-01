import { RootState } from '../../redux-types';

export const selectShopItems = (state: RootState) => state.shop.items;
export const selectShopItemsLoading = (state: RootState) => state.shop.loading;
export const selectShopError = (state: RootState) => state.shop.error;
