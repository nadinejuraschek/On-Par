import { TPayment } from "types";

export interface IPaymentEntry {
  handleEdit: () => void;
  payment: TPayment;
}

export interface IStyledListItem {
  warning: boolean;
}