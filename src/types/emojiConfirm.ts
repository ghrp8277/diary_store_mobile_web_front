// 0 제출완료 1 심사중 2 미승인 3 승인
enum Confirm {
  '제출완료',
  '심사중',
  '미승인',
  '승인',
}

interface ImageFile {
  image_url: string;
}

import { EmojiInfo } from './emojiInfo';

export interface EmojiConfirm {
  id: number;
  created_at: Date;
  is_confirm: Confirm;
  emojiInfo: EmojiInfo;
  imageFiles: ImageFile[];
}
