import * as dayjs from "dayjs";
import { useMemo } from "react";
import { Text } from "components";
import { IWeeklyItem } from "./types";
import { TWorkhour } from "../types";
import { TimeUtils } from "utils";
import { Hours, StartTrackerButton, StyledItem } from "./styled";

export const WeeklyItem = ({ day, hours }: IWeeklyItem): JSX.Element => {
  const renderTotalHours = useMemo(() => {
    const todaysHours = hours.filter(item => dayjs(item.date).format("YY-MM-DD") === dayjs(day).format("YY-MM-DD"));
    const totalHours = todaysHours.reduce((a: number, b: TWorkhour) => a+b.total, 0);

    return (
      <Hours isOvertime={totalHours > 600}>
        { totalHours === 0 ? null : TimeUtils.minToH(totalHours) }
      </Hours>
    );
  }, [day, hours]);

  const renderStartTrackerButton = useMemo(() => {
    const formattedDay = dayjs(day).format("YY-MM-DD");
    const formattedToday = dayjs().format("YY-MM-DD");

    if (formattedDay !== formattedToday) return null;

    return <StartTrackerButton disabled variant="primary">Start</StartTrackerButton>;
  }, [day]);

  return (
    <StyledItem>
      <Text>{ dayjs(day).format("ddd DD") }</Text>
      { renderTotalHours }
      { renderStartTrackerButton }
    </StyledItem>
  );
};
