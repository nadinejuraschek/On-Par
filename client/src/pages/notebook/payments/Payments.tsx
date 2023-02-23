import { AddPayment } from "./AddPayment";
import { PaymentTable } from "./PaymentTable";
import { Text } from "components";
import styles from "./payments.module.css";

export const Payments = (): JSX.Element => (
  <main>
    <div className={ styles.grid }>
      <Text as="h2" className={ styles.header } size="xl" weight="bold">Payments</Text>
      <PaymentTable />
      <AddPayment />
    </div>
  </main>
);
