import { State } from './state';

const getters = {
  categories: (state: State) => {
    const arr = [] as string[];
    const products = state.products;

    for (const product of products) {
      const emoji_info = product.emojiConfirm.emojiInfo;

      const category = emoji_info.category;

      arr.push(category);
    }

    return arr;
  },
  emoticons: (state: State) => {
    const arr = [] as {
      product_name: string;
      image_file: string;
    }[];

    const products = state.products;

    for (const product of products) {
      const emoji_info = product.emojiConfirm.emojiInfo;
      const emoji_confirm = product.emojiConfirm;

      const product_name = emoji_info.product_name;

      const image_files = emoji_confirm.imageFiles;

      const obj = {
        product_name,
        image_file: image_files[0].image_url,
      };

      arr.push(obj);
    }

    return arr;
  },
};

type Getters = typeof getters;

export { getters, Getters };
