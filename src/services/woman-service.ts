import { AxiosError } from 'axios';
import { Item } from '../types';
import ApiService from './api-service';

const fetchItems = async (): Promise<Item[]> => {
  const { data } = await ApiService.get<Item[]>('/WomanWatches');
  return data;
};

const fetchItemById = async (id: string): Promise<Item> => {
  try {
    const { data } = await ApiService.get<Item>(`/WomanWatches/${id}`);
    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const fetchItemsByIds = async (ids: string[]): Promise<Item[]> => Promise.all(ids.map(fetchItemById));

const WomanService = {
  fetchItems,
  fetchItemById,
  fetchItemsByIds,
};

export default WomanService;
