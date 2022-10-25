import { PaymentHistoryInterface } from '@/types/paymentHistory';

const state = {
  payment_histories: [] as PaymentHistoryInterface[],
  payment_info: {},
};

type State = typeof state;

export { state, State };
