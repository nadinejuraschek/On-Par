import { ITimer } from "./types";
import { ProgressRing } from "../ProgressRing";
import { TimeUtils } from "utils";
import styles from "./timer.module.css";
import { useMemo } from 'react';

export const Timer = ( { time }: ITimer ): JSX.Element => {
  const hours = TimeUtils.minToH( time );

  const progress = useMemo(() => {
    const percentage = ( 100 / 600 ) * time;
    return percentage <= 100 ? percentage : 100;
  }, [time]);

  return (
    <div className={ styles.container }>
      <ProgressRing radius={ 65 } stroke={ 4 } progress={ progress } label={ hours } />
    </div>
  );
};
