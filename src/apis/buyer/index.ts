import { instance } from '@/apis';
import { Product } from '@/types/products';

export async function fetchProductsInfo(username: string): Promise<Product[]> {
  const { data } = await instance.get(`buyer/${username}/products`);

  return data;
}
