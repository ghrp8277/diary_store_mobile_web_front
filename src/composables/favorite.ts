import { useStore } from '@/services/pinia/buyer';
import { computed } from '@vue/composition-api';
import { ImageFile } from '@/types/emojiConfirm';

class Favorite {
  public id: number;
  public product_name: string;
  public image_files: ImageFile[];
  public title_image: string;
  public author: string;
  public is_like: boolean;
  public count: number;
  public price: number;

  constructor() {
    this.id = 0;
    this.is_like = false;
    this.title_image = '';
    this.product_name = '';
    this.author = '';
    this.image_files = [];
    this.count = 0;
    this.price = 0;
  }
}

export default (id: number) => {
  const store = useStore();

  const favorite = computed(() => {
    const favorite = store.emoticons.find((emoticon) => emoticon.id == id);
    return favorite ? favorite : new Favorite();
  });

  const product_id = computed(() => favorite.value.id);
  const is_like = computed(() => favorite.value.is_like);
  const count = computed(() => favorite.value.count);
  const title_image = computed(() => favorite.value.title_image);

  const product_name = computed(() => favorite.value.product_name);
  const author = computed(() => favorite.value.author);
  const price = computed(() => favorite.value.price);
  const image_files = computed(() => favorite.value.image_files);

  return {
    id: product_id,
    is_like,
    count,
    title_image,
    product_name,
    author,
    price,
    image_files,
  };
};
