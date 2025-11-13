import { Header, Text, Timer, WeeklyHours as WeeklyList } from "components";
import { useFetchWorkhoursToday } from "hooks";
import { useMemo } from "react";
import { AddHours } from "./AddHours";
import { CardAddWorkhour, CardReminder, CardTimer, CardTracker, StyledContent } from "./styled";

const Workhours = (): JSX.Element => {
  const { data: todayWorkhourTotal } = useFetchWorkhoursToday();

  const renderTimes = useMemo(() => <Timer time={ todayWorkhourTotal } />, [todayWorkhourTotal]);

  return (
    <>
      <Header pageTitle="Workhours" />
      <StyledContent>
        <CardReminder>
          <Text size="sm">
            <strong>Reminder:</strong><br />
            You should be working a maximum of <strong>10h a day</strong> and <strong>45h per week</strong>.
          </Text>
        </CardReminder>
        <CardTracker>
          <WeeklyList />
        </CardTracker>
        <CardTimer>
          {renderTimes}
        </CardTimer>
        <CardAddWorkhour>
          <AddHours />
        </CardAddWorkhour>
      </StyledContent>
    </>
  );
};

export default Workhours;