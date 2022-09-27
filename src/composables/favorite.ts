import { useStore } from '@/services/pinia/buyer';
import { computed } from '@vue/composition-api';
import { ImageFile } from '@/types/emojiConfirm';

class Favorite {
  public id: number;
  public product_name: string;
  public image_files: ImageFile[];
  public title_image: string;
  public author_name: string;
  public is_like: boolean;

  constructor() {
    this.id = 0;
    this.is_like = false;
    this.title_image = '';
    this.product_name = '';
    this.author_name = '';
    this.image_files = [];
  }
}

export default (id: number) => {
  const store = useStore();

  const favorite = computed(() => {
    const favorite = store.emoticons.find((emoticon) => emoticon.id == id);
    return favorite ? favorite : new Favorite();
  });

  //   const product_id = computed(() => emoticon.value.id);
  //   const is_like = computed(() => emoticon.value.is_like);
  //   const count = computed(() => emoticon.value.count);
  //   const title_image = computed(() => emoticon.value.title_image);

  //   const product_name = computed(() => emoticon.value.product_name);
  //   const author = computed(() => emoticon.value.author);
  //   const price = computed(() => emoticon.value.price);
  //   const image_files = computed(() => emoticon.value.image_files);

  return {
    // id: product_id,
    // is_like,
    // count,
    // title_image,
    // product_name,
    // author,
    // price,
    // image_files,
  };
};
