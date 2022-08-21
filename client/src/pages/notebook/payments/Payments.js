import AddPayment from "./AddPayment";
import styles from "./payments.module.css";
import PaymentTable from "./PaymentTable";

const Payments = () => {
  return (
    <main>
      <div className={ styles.grid }>
        <h2 className={ styles.header }>Payments</h2>
        <PaymentTable />
        <AddPayment />
      </div>
    </main>
  );
};

export default Payments;
