import { Category, ProductPopulated } from '../types';
import ApiService, { formatError } from './api-service';

const fetchProducts = async (categoryId?: string): Promise<ProductPopulated[]> => {
  try {
    const { data } = await ApiService.get<{ products: ProductPopulated[] }>(
      '/api/products?populate=categories',
      { params: { categoryId } },
    );
    return data.products;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const fetchCategories = async (): Promise<Category[]> => {
  try {
    const { data } = await ApiService.get<{ categories: Category[] }>('/api/categories');

    return data.categories;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const ShopService = {
  fetchProducts,
  fetchCategories,
};

export default ShopService;
