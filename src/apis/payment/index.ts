import { instance } from '@/apis';

export async function fetchPayment(formData: {
  quantity: number;
  total_amount: number;
  partner_order_id: string;
}) {
  const params = new URLSearchParams();
  params.append('form_data', JSON.stringify(formData));

  const { data } = await instance.payment.post('ready', params);

  return data;
}

export async function fetchApprove(
  username: string,
  formData: {
    tid: string;
    pg_token: string;
    total_amount: number;
    partner_order_id: string;
  }
) {
  const params = new URLSearchParams();
  params.append('form_data', JSON.stringify(formData));

  const { data } = await instance.payment.post(`approve/${username}`, params);

  return data;
}

export async function fetchHistory(username: string) {
  const { data } = await instance.payment.get(`history/${username}`);

  return data;
}

export async function fetchCancel(id: number) {
  const { data } = await instance.payment.post(`cancel/${id}`);

  return data;
}
