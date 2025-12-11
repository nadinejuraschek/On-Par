import { Button, Icon, LoadingSpinner } from "components";
import * as dayjs from "dayjs";
import { useCallback, useMemo, useState } from "react";
import { DateNav, WeeklyGrid, WeekRange } from "./styled";
import { WorkhourList } from "./WorkhourList";
import { getWorkhours } from "api";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { TWorkhour } from "types";

export const WeeklyHours = (): JSX.Element => {
  const [startWeek, setStartWeek] = useState( dayjs().startOf( "week" ) );

  const endWeek = dayjs( startWeek ).endOf( "week" );

  const startOfWeek = dayjs(startWeek).format("YYYY-MM-DD").toString() || dayjs().startOf("week").format("YYYY-MM-DD");
  const endOfWeek = dayjs(startOfWeek).endOf("week").add(1, "day").format("YYYY-MM-DD");

  const { data: workhoursData, isLoading, isError } = useQuery({
    queryKey: ["workhoursWeekly", startWeek],
    queryFn: async () => getWorkhours({ endOfWeek, filter: "weekly", startOfWeek }),
  });

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

  const totalHours = useMemo(() => workhoursData?.reduce((acc: number, cur: TWorkhour) => {
    return acc + cur.total;
  }, 0), [workhoursData]);

  console.log('LOG totalHours: ', totalHours);

  // sort array to display Sun - Sat
  const hours = useMemo(() => {
    if (!workhoursData) return [];

    return workhoursData?.sort(( a, b ) => a.date.valueOf() - b.date.valueOf());
  }, [workhoursData]);

  const renderList = useMemo(() => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    if (isError) {
      toast.error("Could not fetch workhours. Please try again later!");
      return null;
    }

    return (
      <WorkhourList
        endDate={endWeek}
        hours={hours}
        startDate={startWeek}
      />
    );
  }, [endWeek, hours, isError, isLoading, startWeek]);

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
