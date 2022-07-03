import styles from "./timer.module.css";
import { minToH } from "../../hooks/useTime";
import { ProgressRing } from "../ProgressRing";

export const Timer = ( { time } ) => {
  const progress = ( 100 / 600 ) * time;
  const hours = minToH( time );

  return (
    <div className={ styles.container }>
      <ProgressRing radius={ 65 } stroke={ 4 } progress={ progress } label={ hours } />
    </div>
  );
};
