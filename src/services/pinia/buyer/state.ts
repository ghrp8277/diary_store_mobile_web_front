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
  faq: [] as FAQ[],
  searchCount: 0,
  search_products: [] as Product[],
};

type State = typeof state;

export { state, State };
