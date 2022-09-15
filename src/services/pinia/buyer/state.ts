import { Product } from '@/types/products';

const state = {
  products: [] as Product[],
  favorites: [] as any[],
};

type State = typeof state;

export { state, State };
