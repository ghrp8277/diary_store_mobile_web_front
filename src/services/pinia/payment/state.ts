import { PaymentHistoryInterface } from '@/types/paymentHistory';

const state = {
  payment_histories: [] as PaymentHistoryInterface[],
};

type State = typeof state;

export { state, State };
