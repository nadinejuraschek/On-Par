import * as dayjs from "dayjs";

import { useEffect, useState } from "react";

import { Button } from "components";
import { IWeeklyItem } from "./types";
import { TimeUtils } from "utils";
import styles from "./hours.module.css";

export const WeeklyItem = ({ day, hours }: IWeeklyItem): JSX.Element => {
  const [displayHours, setDisplayHours] = useState(0);

  const formattedDay = dayjs(day).format("YY-MM-DD");
  const formattedToday = dayjs(new Date()).format("YY-MM-DD");

  const renderStartTrackerButton = formattedDay === formattedToday;

  useEffect(() => {
    hours.forEach(item => {
      if (
        dayjs(item.date).format("YY-MM-DD") === dayjs(day).format("YY-MM-DD")
      ) {
        setDisplayHours(item.total);
      }
    });
  }, [day, hours]);

  return (
    <li className={ styles.weeklyItem }>
      <div className={ styles.date }>
        <div className={ styles.weekday }>{ dayjs(day).format("ddd") }</div>
        <div>{ dayjs(day).format("DD") }</div>
      </div>
      <div
        className={ `${ styles.date } ${
          displayHours > 600 ? styles.red : styles.green
        }` }
      >
        { displayHours === 0 ? null : TimeUtils.minToH(displayHours) }
      </div>
      { renderStartTrackerButton && <Button className={ styles.startTrackerBtn } disabled variant="primary">Start</Button> }
    </li>
  );
};
