interface EmojiInfo {
  product_name: string;
  author_name: string;
  category: string;
  tag: string;
  comment: string;
}

import { EmojiConfirm } from './emojiConfirm';

export interface Product {
  id: number;
  is_like: boolean;
  emojiConfirm: EmojiConfirm;
}

// const product: Omit<EmojiConfirm, 'is_confirm'> = {
//     id: 0,
//     createdAt: new Date(),
// };
