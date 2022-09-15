import { Category } from '@/types/category';
import { Product } from '@/types/products';

const state = {
  products: [] as Product[],
  favorites: [] as any[],
  categories: [] as Category[],
};

type State = typeof state;

export { state, State };
