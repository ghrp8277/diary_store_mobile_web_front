import { EmojiConfirm } from './emojiConfirm';

export interface Product {
  id: number;
  is_like: boolean;
  emojiConfirm: EmojiConfirm;
  price: number;
  discount: number;
  count: number;
}
