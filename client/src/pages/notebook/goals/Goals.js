import Goal from "components/List/Goals";
import { GoalContext } from "contexts/GoalContext";
import { useContext } from "react";
import styles from "./goals.module.css";

const Goals = () => {
  const { threeMonths, sixMonths, nineMonths, twelveMonths } = useContext( GoalContext );

  return (
    <main>
      <div className={ styles.layout }>
        <h2 className={ styles.header }>Your Goals</h2>

        <Goal className={ styles.three } month={ 3 } data={ threeMonths } />

        <Goal className={ styles.six } month={ 6 } data={ sixMonths } />

        <Goal className={ styles.nine } month={ 9 } data={ nineMonths } />

        <Goal className={ styles.twelve } month={ 12 } data={ twelveMonths } />

      </div>
    </main>
  );
};

export default Goals;
