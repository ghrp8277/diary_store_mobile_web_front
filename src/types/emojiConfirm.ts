import { EmojiInfo } from './emojiInfo';
// 0 제출완료 1 심사중 2 미승인 3 승인
enum Confirm {
  '제출완료',
  '심사중',
  '미승인',
  '승인',
}

export interface ImageFile {
  image_url: string;
}

export interface EmojiConfirm {
  id: number;
  createdAt: Date;
  is_confirm: Confirm;
  emojiInfo: EmojiInfo;
  imageFiles: ImageFile[];
}
