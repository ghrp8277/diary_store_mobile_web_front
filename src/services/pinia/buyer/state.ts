import { Product } from '@/types/products';

const state = {
  products: [] as Product[],
};

type State = typeof state;

export { state, State };
