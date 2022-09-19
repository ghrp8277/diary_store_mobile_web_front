import { instance } from '@/apis';
import { Product } from '@/types/products';

export async function fetchProductsInfo(username: string): Promise<Product[]> {
  const { data } = await instance.buyer.get(`${username}/products`);

  return data;
}

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

export async function fetchFavoritesInfo(username: string) {
  const { data } = await instance.buyer.get(`${username}/products/favorite`);

  return data;
}

export async function fetchCategories() {
  const { data } = await instance.buyer.get(`products/category`);

  return data;
}

export async function fetchProductRank() {
  const { data } = await instance.buyer.get(`products/rank`);

  return data;
}
