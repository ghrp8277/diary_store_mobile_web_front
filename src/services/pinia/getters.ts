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
};

type Getters = typeof getters;

export { getters, Getters };
