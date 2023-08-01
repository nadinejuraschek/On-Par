import { Button } from "components";
import * as dayjs from "dayjs";
import { useWorkhours } from "hooks";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DateNav, WeeklyGrid, WeeklyList, WeekRange } from "./styled";
import { WeeklyItem } from "./WeeklyItem";

export const WeeklyHours = (): JSX.Element => {
  const { getWeeklyWorkhours, weeklyWorkhours } = useWorkhours();

  const [startWeek, setStartWeek] = useState( dayjs().startOf( "week" ) );

  const endWeek = dayjs( startWeek ).endOf( "week" );

  useEffect(() => {
    getWeeklyWorkhours(dayjs(startWeek).format("YYYY-MM-DD"));
  }, [getWeeklyWorkhours, startWeek]);

  const prev = useCallback(() => {
    const futureDate = dayjs( startWeek ).subtract( 1, "weeks" );
    getWeeklyWorkhours(dayjs(futureDate).format("YYYY-MM-DD"));
    setStartWeek( futureDate );
  }, [getWeeklyWorkhours, startWeek]);

  const next = useCallback(() => {
    const futureDate = dayjs( startWeek ).add( 1, "weeks" );
    getWeeklyWorkhours(dayjs(futureDate).format("YYYY-MM-DD"));
    setStartWeek( futureDate );
  }, [getWeeklyWorkhours, startWeek]);

  const renderWeekRange = useMemo(() => {
    return (
      <WeekRange weight="bold">
        { `${ dayjs( startWeek ).format( "MMM DD" ) } - ${ dayjs( endWeek ).format( "MMM DD" ) }` }
      </WeekRange>
    );
  }, [endWeek, startWeek]);

  // sort array to display Sun - Sat
  const hours = useMemo(() => weeklyWorkhours.sort(( a, b ) => (
    a.date.valueOf() - b.date.valueOf()
  )), [weeklyWorkhours]);

  const renderWeek = useMemo(() => {
    let day = startWeek;
    const week = [];

    while ( day <= endWeek ) {
      for ( let i = 0; i < 7; i++ ) {
        week.push(
          <WeeklyItem
            day={ day }
            key={ i }
            hours={ hours }
          />,
        );
        day = dayjs( day ).add( 1, "day" );
      }
    }

    return week;
  }, [endWeek, hours, startWeek]);

  return (
    <WeeklyGrid>
      <DateNav>
        <Button handleClick={ prev } square variant="tertiary">
          <i className="chevron left icon"></i>
        </Button>
        { renderWeekRange }
        <Button handleClick={ next } square variant="tertiary">
          <i className="chevron right icon"></i>
        </Button>
      </DateNav>
      <WeeklyList>{ renderWeek }</WeeklyList>
    </WeeklyGrid>
  );
};
