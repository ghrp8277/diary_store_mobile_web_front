import { instance } from '@/apis';
import { Product } from '@/types/product';

// 이모티콘 정보를 가져온다.
export async function fetchProductsInfo(username: string): Promise<Product[]> {
  const { data } = await instance.buyer.get(`${username}/products`);

  return data;
}

// 유저별 이모티큰 즐겨찾기 정보를 가져온다.
export async function fetchProductByIsLike(
  username: string,
  id: number,
  is_like: boolean
): Promise<Product[]> {
  const { data } = await instance.buyer.patch(`${username}/products/${id}`, {
    params: {
      is_like,
    },
  });

  return data;
}

// 즐겨찾기 이모티콘 정보를 가져온다.
export async function fetchFavoritesInfo(username: string) {
  const { data } = await instance.buyer.get(`${username}/products/favorite`);

  return data;
}

// 카테고리를 가져온다.
export async function fetchCategories() {
  const { data } = await instance.buyer.get(`products/category`);

  return data;
}

// 인기순 이모티콘 정보를 가져온다.
export async function fetchProductRank() {
  const { data } = await instance.buyer.get(`products/rank`);

  return data;
}

// 공지사항 리스트를 가져온다.
export async function fetchNotices(page: number) {
  const { data } = await instance.buyer.get(`${page}/notices`);

  return data;
}

// 특정 공지사항 정보를 가져온다.
export async function fetchStoreNoticeInfo(id: number) {
  const { data } = await instance.buyer.get(`notices/${id}`);

  return data;
}

// FAQ 정보를 가져온다.
export async function fecthStoreFAQ() {
  const { data } = await instance.buyer.get(`faq`);

  return data;
}
