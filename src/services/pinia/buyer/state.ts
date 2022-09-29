import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { Notice } from '@/types/notice';
import { Favorite } from '@/types/favorite';

const state = {
  products: [] as Product[],
  favorites: [] as Favorite[],
  categories: [] as Category[],
  ranks: [] as Product[],
  notices: [] as Notice[],
  totalPage: 0,
};

type State = typeof state;

export { state, State };
