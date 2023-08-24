import * as dayjs from "dayjs";
import { useMemo } from "react";
import { WeeklyList } from "./styled";
import { IWorkhourList } from "./types";
import { WorkhourDay } from "../WorkhourDay";

export const WorkhourList = ({ endDate, hours, startDate }: IWorkhourList): JSX.Element => {
  const renderWeek = useMemo(() => {
    let day = startDate;
    const week = [];

    while ( day <= endDate ) {
      week.push(
        <WorkhourDay
          day={ day }
          hours={ hours }
          key={ day.format("YY-MM-DD") }
        />,
      );
      day = dayjs( day ).add( 1, "day" );
    }

    return week;
  }, [endDate, hours, startDate]);

  return (
    <WeeklyList>{ renderWeek }</WeeklyList>
  );
}