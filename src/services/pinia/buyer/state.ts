import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { Notice } from '@/types/notice';

const state = {
  products: [] as Product[],
  favorites: [] as any[],
  categories: [] as Category[],
  ranks: [] as Product[],
  notices: [] as Notice[],
};

type State = typeof state;

export { state, State };
