import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import {
  fetchNewCategories,
  fetchFavoritesInfo,
  fetchProductByIsLike,
  fetchNewProducts,
  fetchRankProducts,
  fetchNotices,
  fetchStoreNoticeInfo,
  fecthStoreFAQ,
  fetchProductsSearch,
  fetchDetailProduct,
  fetchStyleProducts,
} from '@/apis/buyer';

export const useStore = defineStore('buyer', {
  state: () => state,
  actions: {
    async FETCH_PRODUCT_DETAIL(id: number, username: string) {
      const data = await fetchDetailProduct(id, username);

      this.product = data;
    },
    async FETCH_PRODUCTS_NEW(username: string, page: number, size: number) {
      const data = await fetchNewProducts(username, page, size);

      this.products = data;
    },
    async FETCH_PRODUCT_BY_IS_LIKE(
      username: string,
      id: number,
      is_like: boolean,
      page: number,
      size: number
    ) {
      const data = await fetchProductByIsLike(
        username,
        id,
        is_like,
        page,
        size
      );

      this.products = data;
    },
    async FETCH_FAVORITES_INFO(username: string) {
      const data = await fetchFavoritesInfo(username);

      this.favorites = data;
    },
    async FETCH_CATEGORY_INFO() {
      const data = await fetchNewCategories();

      this.categories = data;
    },
    async FETCH_PRODUCTS_RANK(page: number, size: number) {
      const data = await fetchRankProducts(page, size);

      this.products = data;
    },
    async FETCH_PRODUCTS_STYLE() {
      const data = await fetchStyleProducts();

      this.style_products = data;
    },
    async FETCH_NOTICES(page: number) {
      const data = await fetchNotices(page);

      this.notices = data.notices;
      this.totalPage = data.totalPage;
    },
    async FETCH_NOTICE_INFO(id: number) {
      const data = await fetchStoreNoticeInfo(id);

      return data;
    },
    async FETCH_FAQ() {
      const data = await fecthStoreFAQ();

      this.faq = data;
    },
    async FETCH_PRODUCTS_SEARCH(query: string, page: number, size: number) {
      const data = await fetchProductsSearch(query, page, size);

      this.search_products = data.product;

      this.searchCount = data.count;
    },
  },
  getters,
  persist: {
    storage: sessionStorage,
    key: 'buyer',
    paths: ['products', 'notices'],
  },
});
