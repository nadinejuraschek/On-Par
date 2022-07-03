import { FeatureCard } from "components/Features";

import styles from "./notebook.module.css";
import goalIcon from "../../images/goal.svg";
import hoursIcon from "../../images/hours.svg";
import notesIcon from "../../images/note.svg";
import paymentIcon from "../../images/payment.svg";

export const Notebook = () => (
  <main>
    <div className={ styles.layout }>
      <h2 className={ styles.header }>Notebook</h2>

      <FeatureCard
        title="workhours"
        header="Work Hours"
        icon={ hoursIcon }
        link="/notebook/workhours"
      />

      <FeatureCard
        title="payment"
        header="Payments"
        icon={ paymentIcon }
        link="/notebook/payments"
      />

      <FeatureCard
        title="goals"
        header="Goals"
        icon={ goalIcon }
        link="/notebook/goals"
      />

      <FeatureCard
        title="notes"
        header="Notes"
        icon={ notesIcon }
        link="/notebook/notes"
      />

    </div>
  </main>
);
