import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { Notice } from '@/types/notice';
import { Favorite } from '@/types/favorite';
import { FAQ } from '@/types/faq';

const state = {
  products: [] as Product[],
  product: {} as {
    id: number;
    count: number;
    price: number;
    emojiConfirm: {
      createdAt: string;
      emojiInfo: { product_name: string; author_name: string };
      imageFiles: [
        {
          image_url: string;
        },
        {
          image_url: string;
        }
      ];
    };
    is_like: boolean;
    is_buyer: boolean;
  },
  favorites: [] as Favorite[],
  categories: [] as Category[],
  style_products: [] as any,
  notices: [] as Notice[],
  totalPage: 0,
  faq: [] as FAQ[],
  searchCount: 0,
  search_products: [] as Product[],
};

type State = typeof state;

export { state, State };
