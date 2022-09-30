import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { Notice } from '@/types/notice';
import { Favorite } from '@/types/favorite';
import { FAQ } from '@/types/faq';

const state = {
  products: [] as Product[],
  favorites: [] as Favorite[],
  categories: [] as Category[],
  ranks: [] as Product[],
  notices: [] as Notice[],
  totalPage: 0,
  FAQ: [] as FAQ[],
};

type State = typeof state;

export { state, State };
