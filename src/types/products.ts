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
