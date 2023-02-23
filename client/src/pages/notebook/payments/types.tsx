export interface IPaymentEntry {
  deletePayment: any;
  payment: TPayment;
  paymentid: string;
}

export type TPayment = {
  date: string;
  late: boolean;
  paid: boolean;
  week: number;
};