import { instance } from '@/apis';
import { Product } from '@/types/product';

// (신규탭) 이모티콘 정보를 가져온다.
export async function fetchNewProducts(
  username: string,
  page: number,
  size: number
): Promise<Product[]> {
  const { data } = await instance.buyer.get(`new/${username}`, {
    params: {
      page,
      size,
    },
  });

  return data;
}

// (신규탭) 카테고리 정보를 가져온다.
export async function fetchNewCategories() {
  const { data } = await instance.buyer.get('category');

  return data;
}

// (인기탭) 이모티콘 정보를 가져온다.
export async function fetchRankProducts(page: number, size: number) {
  const { data } = await instance.buyer.get(`rank`, {
    params: {
      page,
      size,
    },
  });

  return data;
}

// (스타일탭) 이모티콘 정보를 가져온다.
export async function fetchStyleProducts() {
  const { data } = await instance.buyer.get(`style`);

  return data;
}

// (디테일) 이모티콘 정보를 가져온다.
export async function fetchDetailProduct(id: number, username: string) {
  const { data } = await instance.buyer.get(
    `detail/${username}/products/${id}`
  );

  return data;
}

// 유저별 이모티큰 즐겨찾기 정보를 가져온다.
export async function fetchProductByIsLike(
  username: string,
  id: number,
  is_like: boolean,
  page: number,
  size: number
): Promise<Product[]> {
  const { data } = await instance.buyer.put(`new/${username}/products/${id}`, {
    params: {
      is_like,
      page,
      size,
    },
  });

  return data;
}

// 즐겨찾기 이모티콘 정보를 가져온다.
export async function fetchFavoritesInfo(username: string) {
  const { data } = await instance.buyer.get(`favorite/${username}`);

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

// 검색창 검색 시 정보를 가져온다.
export async function fetchProductsSearch(
  query: string,
  page: number,
  size: number
) {
  const params = {
    query,
    page,
    size,
  };

  const { data } = await instance.buyer.get(`search`, {
    params,
  });

  return data;
}
