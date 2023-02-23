import { ReactNode } from "react";

export interface IPaymentContext {
  payments?: TPayment[];
  getPayments?: () => void;
  deletePayment?: (id: string) => void;
}

export interface IPaymentProvider {
  children: ReactNode;
}

export type TPayment = {
  _id: string;
  date: string;
  late: boolean;
  paid: boolean;
  week: number;
};