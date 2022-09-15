import { instance } from '@/apis';
import { Product } from '@/types/products';

export async function fetchProductsInfo(): Promise<Product[]> {
  const { data } = await instance.get(`buyer/products`);

  return data;
}

export async function fetchProductByIsLike(
  username: string,
  id: number,
  is_like: boolean
): Promise<Product[]> {
  const { data } = await instance.patch(`buyer/${username}/products/${id}`, {
    params: {
      is_like,
    },
  });

  return data;
}

export async function fetchFavoritesInfo(username: string) {
  const { data } = await instance.get(`buyer/${username}/products/favorite`);

  return data;
}
