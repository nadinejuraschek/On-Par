// import { Text } from "components";
import * as dayjs from "dayjs";
import { useMemo } from "react";
import { TimeUtils } from "utils";
import { Date, Day, Hours, Month, StartTrackerButton, StyledItem, TrackerWrapper } from "./styled";
import { IWeeklyItem } from "./types";

export const WeeklyItem = ({ day, hours }: IWeeklyItem): JSX.Element => {
  const totalHours = useMemo(() => {
    const todaysHours = hours.find(item => dayjs(item.date).set("hour", 12).set("minute", 0).set("second", 0).set("millisecond", 0).toISOString() === dayjs(day).set("hour", 12).set("minute", 0).set("second", 0).set("millisecond", 0).toISOString());

    return todaysHours?.total ?? 0;
  }, [day, hours]);

  const renderTotalHours = useMemo(() => (
    <Hours isOvertime={totalHours > 600}>
      { totalHours === 0 ? null : `${TimeUtils.minToH(totalHours)} h` }
    </Hours>
  ), [totalHours]);

  const renderStartTrackerButton = useMemo(() => {
    const formattedDay = dayjs(day).format("YY-MM-DD");
    const formattedToday = dayjs().format("YY-MM-DD");

    if (formattedDay !== formattedToday) return null;

    return <StartTrackerButton disabled variant="primary">Start</StartTrackerButton>;
  }, [day]);

  return (
    <StyledItem>
      <Date>
        <Day>{dayjs(day).format("DD")}</Day>
        <Month>{dayjs(day).format("MMM")}</Month>
      </Date>
      {/* <Text>{ dayjs(day).format("ddd DD") }</Text> */}
      { renderTotalHours }
      <TrackerWrapper>
        { renderStartTrackerButton }
      </TrackerWrapper>
    </StyledItem>
  );
};
