import { computed } from '@vue/composition-api';
import store from '@/store';
import { storeToRefs } from 'pinia';
import { useStore } from '@/services/pinia/buyer';
import moment from 'moment';

class Notice {
  public id: number;
  public createdAt: Date;
  public title: string;
  public is_important: boolean;
  public file_name: string;
  public username: string;
  public is_visible: boolean;

  constructor() {
    this.id = 0;
    this.createdAt = new Date();
    this.title = '';
    this.is_important = false;
    this.file_name = '';
    this.username = '';
    this.is_visible = false;
  }
}

export default (id: number) => {
  const store = useStore();
  const { notices } = storeToRefs(store);

  const notice = computed(() => {
    const notice = notices.value.find((notice) => notice.id === id);

    return notice ? notice : new Notice();
  });

  const notice_id = computed(() => notice.value.id);
  const createdAt = computed(() => notice.value.createdAt);
  const title = computed(() => notice.value.title);
  const is_important = computed(() => notice.value.is_important);
  const file_name = computed(() => notice.value.file_name);
  const username = computed(() => notice.value.username);
  const is_visible = computed(() => notice.value.is_visible);

  return {
    notice,
    id: notice_id,
    createdAt,
    title,
    is_important,
    file_name,
    username,
    is_visible,
  };
};
