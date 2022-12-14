import { State } from './state';
import { ImageFile } from '@/types/emojiConfirm';
import moment from 'moment';

const getters = {
  emoticon: (state: State) => {
    const product = state.product;

    const id = product.id;

    const count = product.count;

    const price = product.price;

    const is_like = product.is_like;

    const is_buyer = product.is_buyer;

    const emoji_confirm = product.emojiConfirm;

    const emoji_info = emoji_confirm?.emojiInfo;

    const product_name = emoji_info?.product_name;

    const author_name = emoji_info?.author_name;

    const image_files = emoji_confirm?.imageFiles;

    const title_image = image_files ? image_files[0].image_url : '';

    return {
      id,
      count,
      price,
      is_like,
      is_buyer,
      product_name,
      author_name,
      image_files,
      title_image,
    };
  },
  emoticons: (state: State) => {
    const arr = [] as {
      id: number;
      product_name: string;
      image_files: ImageFile[];
      title_image: string;
      is_like: boolean;
      category: string;
      author: string;
      price: number;
      count: number;
    }[];

    const products = state.products;

    for (const product of products) {
      const emoji_info = product.emojiConfirm.emojiInfo;
      const emoji_confirm = product.emojiConfirm;

      const product_name = emoji_info.product_name;

      const image_files = emoji_confirm.imageFiles;

      const is_like = product.is_like;

      const id = product.id;

      const category = emoji_info.category;

      const author = emoji_info.author_name;

      const title_image = image_files[0].image_url;

      const price = product.price;

      const discount = product.discount;

      const count = product.count;

      const obj = {
        id,
        is_like,
        product_name,
        image_files,
        title_image,
        category,
        author,
        price,
        discount,
        count,
      };

      arr.push(obj);
    }

    return arr;
  },
  emoticon_ranks: (state: State) => {
    const arr = [] as {
      id: number;
      product_name: string;
      image_files: ImageFile[];
      title_image: string;
      author_name: string;
      isNewCreated: boolean;
    }[];

    const products = state.products;

    for (const product of products) {
      const emoji_confirm = product.emojiConfirm;
      const emoji_info = emoji_confirm.emojiInfo;

      const product_name = emoji_info.product_name;

      const image_files = emoji_confirm.imageFiles;

      const id = product.id;

      const author_name = emoji_info.author_name;

      const title_image = image_files[0].image_url;

      const now = moment(new Date());
      const created_at = emoji_confirm.createdAt;
      const duration = moment.duration(now.diff(created_at));

      const isNewCreated = duration.asDays() <= 7;

      arr.push({
        id,
        product_name,
        image_files,
        title_image,
        author_name,
        isNewCreated,
      });
    }

    return arr;
  },
  emoticon_favorites: (state: State) => {
    const arr = [] as {
      id: number;
      product_name: string;
      image_files: ImageFile[];
      title_image: string;
      author_name: string;
    }[];

    const favorites = state.favorites;

    for (const favorite of favorites) {
      const product = favorite.product;
      const emoji_confirm = product.emojiConfirm;
      const emoji_info = emoji_confirm.emojiInfo;

      const product_name = emoji_info.product_name;

      const image_files = emoji_confirm.imageFiles;

      const id = product.id;

      const author_name = emoji_info.author_name;

      const title_image = image_files[0].image_url;

      arr.push({
        id,
        product_name,
        image_files,
        title_image,
        author_name,
      });
    }

    return arr;
  },
  search_emoticons: (state: State) => {
    const arr = [] as {
      id: number;
      product_name: string;
      image_files: ImageFile[];
      title_image: string;
      is_like: boolean;
      category: string;
      author: string;
      price: number;
      discount: number;
      count: number;
      isNewCreated: boolean;
    }[];

    const products = state.search_products;

    for (const product of products) {
      const emoji_info = product.emojiConfirm.emojiInfo;
      const emoji_confirm = product.emojiConfirm;

      const product_name = emoji_info.product_name;

      const image_files = emoji_confirm.imageFiles;

      const is_like = product.is_like;

      const id = product.id;

      const category = emoji_info.category;

      const author = emoji_info.author_name;

      const title_image = image_files[0].image_url;

      const price = product.price;

      const discount = product.discount;

      const count = product.count;

      const now = moment(new Date());
      const created_at = emoji_confirm.createdAt;
      const duration = moment.duration(now.diff(created_at));

      const isNewCreated = duration.asDays() <= 7;

      arr.push({
        id,
        is_like,
        product_name,
        image_files,
        title_image,
        category,
        author,
        price,
        discount,
        count,
        isNewCreated,
      });
    }

    return arr;
  },
};

type Getters = typeof getters;

export { getters, Getters };
