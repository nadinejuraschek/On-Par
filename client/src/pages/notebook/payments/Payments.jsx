import { Text } from "components";
import { AddPayment } from "./AddPayment";
import styles from "./payments.module.css";
import { PaymentTable } from "./PaymentTable";

export const Payments = () => (
  <main>
    <div className={ styles.grid }>
      <Text as="h2" className={ styles.header } size="xl" weight="bold">Payments</Text>
      <PaymentTable />
      <AddPayment />
    </div>
  </main>
);
