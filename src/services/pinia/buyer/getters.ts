import { State } from './state';
import { ImageFile } from '@/types/emojiConfirm';

const getters = {
  emoticons: (state: State) => {
    const arr = [] as {
      id: number;
      product_name: string;
      image_files: ImageFile[];
      is_like: boolean;
      category: string;
      author: string;
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

      const obj = {
        id,
        is_like,
        product_name,
        image_files,
        category,
        author,
      };

      arr.push(obj);
    }

    return arr;
  },
};

type Getters = typeof getters;

export { getters, Getters };
