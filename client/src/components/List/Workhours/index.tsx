import { Button, Icon } from "components";
import * as dayjs from "dayjs";
import { useFetchWorkhoursWeekly } from "hooks";
import { useCallback, useMemo, useState } from "react";
import { DateNav, WeeklyGrid, WeekRange } from "./styled";
import { WorkhourList } from "./WorkhourList";

export const WeeklyHours = (): JSX.Element => {
  const [startWeek, setStartWeek] = useState( dayjs().startOf( "week" ) );

  const endWeek = dayjs( startWeek ).endOf( "week" );

  const { data: workhoursData } = useFetchWorkhoursWeekly({ startDate: startWeek });

  const prev = useCallback(() => {
    const futureDate = dayjs( startWeek ).subtract( 1, "weeks" );
    setStartWeek( futureDate );
  }, [startWeek]);

  const next = useCallback(() => {
    const futureDate = dayjs( startWeek ).add( 1, "weeks" );
    setStartWeek( futureDate );
  }, [startWeek]);

  const renderWeekRange = useMemo(() => {
    return (
      <WeekRange weight="bold">
        { `${ dayjs( startWeek ).format( "MMM DD" ) } - ${ dayjs( endWeek ).format( "MMM DD" ) }` }
      </WeekRange>
    );
  }, [endWeek, startWeek]);

  // sort array to display Sun - Sat
  const hours = useMemo(() => {
    if (!workhoursData?.hours) return [];

    return workhoursData.hours.sort(( a, b ) => a.date.valueOf() - b.date.valueOf());
  }, [workhoursData]);

  const renderList = useMemo(() => {
    return (
      <WorkhourList
        endDate={endWeek}
        hours={hours}
        startDate={startWeek}
      />
    );
  }, [endWeek, hours, startWeek]);

  return (
    <WeeklyGrid>
      <DateNav>
        <Button handleClick={ prev } square variant="tertiary">
          <Icon type="chevronLeft" />
        </Button>
        { renderWeekRange }
        <Button handleClick={ next } square variant="tertiary">
          <Icon type="chevronRight" />
        </Button>
      </DateNav>
      {renderList}
    </WeeklyGrid>
  );
};
