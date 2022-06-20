import { RootState } from '../../redux-types';

export const selectShopProducts = (state: RootState) => state.shop.products;
export const selectShopCategories = (state: RootState) => state.shop.categories;
export const selectShopLoading = (state: RootState) => state.shop.loading;
export const selectShopError = (state: RootState) => state.shop.error;
export const selectShopCategoryFilter = (state: RootState) => state.shop.categoryFilter;
