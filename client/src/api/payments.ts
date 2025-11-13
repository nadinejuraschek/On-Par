import axios from "axios";
import { TPayment } from "types";

export async function getPayments() {
  return await axios.get<TPayment[]>("/api/user/:id/payments").then((res) => res.data);
}

export async function editPayment(updatedPayment: TPayment) {
  return await axios.put(`/api/payments/${updatedPayment._id}`, updatedPayment);
}
