import { Text } from "components";
import * as dayjs from "dayjs";
import { useMemo } from "react";
import { TimeUtils } from "utils";
import { Actions, Date, Hours, StartTrackerButton, StyledItem, Tracker } from "./styled";
import { IWorkhourDay } from "./types";

export const WorkhourDay = ({ day, hours }: IWorkhourDay): JSX.Element => {
  const totalHours = useMemo(() => {
    const todaysHours = hours.find(item => dayjs(item.date).set("hour", 12).set("minute", 0).set("second", 0).set("millisecond", 0).toISOString() === dayjs(day).set("hour", 12).set("minute", 0).set("second", 0).set("millisecond", 0).toISOString());

    return todaysHours?.total ?? 0;
  }, [day, hours]);

  const renderTotalHours = useMemo(() => {
    const isOvertime = totalHours > 600;
    return (
      <Hours>
        <Text color="--grey_400" size="sm">
          Total
        </Text>
        <Text
          color={isOvertime ? "--error_600" : "--success_700"}
          weight={isOvertime ? "bold" : "regular"}
          size="sm"
        >
          { totalHours === 0 ? "0:00 h" : `${TimeUtils.minToH(totalHours)} h` }
        </Text>
      </Hours>
    );
  }, [totalHours]);

  const renderStartTrackerButton = useMemo(() => {
    const formattedDay = dayjs(day).format("YY-MM-DD");
    const formattedToday = dayjs().format("YY-MM-DD");

    if (formattedDay !== formattedToday) return null;

    return <StartTrackerButton disabled variant="primary">Start</StartTrackerButton>;
  }, [day]);

  return (
    <StyledItem>
      <Date>
        <Text color="--grey_400" size="sm">{dayjs(day).format("ddd")}</Text>
        <Text size="sm">{dayjs(day).format("MMM")} {dayjs(day).format("DD")}</Text>
      </Date>
      <Tracker>
      </Tracker>
      { renderTotalHours }
      <Actions>
        { renderStartTrackerButton }
      </Actions>
    </StyledItem>
  );
};
