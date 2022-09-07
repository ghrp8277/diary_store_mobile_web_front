import { instance } from '@/apis';

export async function fetchProductsInfo(username: string): Promise<void> {
  const { data } = await instance.get(`buyer/${username}/products`);

  return data;
}
