import { TPayment } from "contexts/PaymentContext/types";

export interface IPaymentEntry {
  deletePayment: any;
  payment: TPayment;
  paymentid: string;
}
