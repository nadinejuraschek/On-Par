import { AddPayment } from "./AddPayment";
import styles from "./payments.module.css";
import { PaymentTable } from "./PaymentTable";

export const Payments = () => (
  <main>
    <div className={ styles.grid }>
      <h2 className={ styles.header }>Payments</h2>
      <PaymentTable />
      <AddPayment />
    </div>
  </main>
);
