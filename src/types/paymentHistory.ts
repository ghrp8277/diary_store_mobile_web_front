export interface PaymentHistoryInterface {
  id: number;
  card_info: string;
  createdAt: string;
  price: number;
  product: {
    id: number;
    product_name: string;
    author_name: string;
    title_image: string;
  };
}
