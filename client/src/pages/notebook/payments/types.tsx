import { TPayment } from "contexts/PaymentContext/types";

export interface IPaymentEntry {
  currentWeekNum: number;
  payment: TPayment;
  paymentid: string;
}
