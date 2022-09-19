import { Category } from '@/types/category';
import { Product } from '@/types/product';

const state = {
  products: [] as Product[],
  favorites: [] as any[],
  categories: [] as Category[],
  ranks: [] as Product[],
};

type State = typeof state;

export { state, State };
