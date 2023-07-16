import { TPayment } from 'types';

export interface IPaymentEntry {
  editPayment: (paymentid: string, updatedPayment: TPayment) => Promise<void>;
  payment: TPayment;
  paymentid: string;
}

export interface IStyledListItem {
  paidLate: boolean;
}