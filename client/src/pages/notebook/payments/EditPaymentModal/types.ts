import { TPayment } from "types";

export interface IEditPaymentModal {
  handleClose: () => void;
  originalPayment: TPayment;
  refetchPayments: () => void;
}