import { TPayment } from "types";

export interface IPaymentEntry {
  payment: TPayment;
  refetchPayments: () => void;
}

export interface IStyledListItem {
  $warning: boolean;
}