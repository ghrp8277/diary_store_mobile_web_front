import { State } from './state';
import { ImageFile } from '@/types/emojiConfirm';
import moment from 'moment';

const getters = {
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

    const products = state.ranks;

    for (const product of products) {
      const emoji_info = product.emojiConfirm.emojiInfo;
      const emoji_confirm = product.emojiConfirm;

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
  favorites: (state: State) => {
    const arr = [] as {
      id: number;
      product_name: string;
      image_files: ImageFile[];
      title_image: string;
      author_name: string;
      is_like: boolean;
    }[];

    const favorites = state.products;

    for (const favorite of favorites) {
      const emoji_info = favorite.emojiConfirm.emojiInfo;
      const emoji_confirm = favorite.emojiConfirm;

      const product_name = emoji_info.product_name;

      const image_files = emoji_confirm.imageFiles;

      const id = favorite.id;

      const author_name = emoji_info.author_name;

      const title_image = image_files[0].image_url;

      const is_like = favorite.is_like;

      arr.push({
        id,
        product_name,
        image_files,
        title_image,
        author_name,
        is_like,
      });
    }

    return arr;
  },
  notices: (state: State) => {
    const arr = [] as {
      id: number;
      is_important: number;
      title: string;
      file_name: string;
      username: string;
      is_visible: boolean;
      createAt: Date;
    }[];

    const notices = state.notices;

    for (const notice of notices) {
      const id = notice.id;
      const is_important = notice.is_important;
      const title = notice.title;
      const file_name = notice.file_name;
      const username = notice.username;
      const is_visible = notice.is_visible;
      const createAt = notice.createAt;

      arr.push({
        id,
        is_important,
        title,
        file_name,
        username,
        is_visible,
        createAt,
      });
    }

    return arr;
  },
};

type Getters = typeof getters;

export { getters, Getters };
