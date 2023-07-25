import { Tabs, Text, Timer, WeeklyHours as WeeklyList } from "components";
import { useWorkhours } from "hooks";
import { useMemo, useState } from "react";
import { AddHours } from "./components/AddHours";
import { CardAddWorkhour, CardReminder, CardTimer, CardTracker, StyledContent, TabsWrapper } from "./styled";

const WORKHOURS_TABS = {
  WEEKLY: 0,
  DAILY: 1,
}

export const Workhours = (): JSX.Element => {
  const [tab, setTab] = useState( WORKHOURS_TABS.WEEKLY );
  const { todayWorkhours, workhours } = useWorkhours();

  const tabs = [
    { label: "Weekly", value: WORKHOURS_TABS.WEEKLY }, { disabled: true, label: "Daily", value: WORKHOURS_TABS.DAILY },
  ];

  const renderTimes = useMemo(() => <Timer time={ todayWorkhours } />, [todayWorkhours]);

  return (
    <StyledContent>
      <TabsWrapper>
        <Tabs activeTab={ tab } fullWidth handleClick={ setTab } tabs={ tabs } variant="secondary" />
      </TabsWrapper>
      <CardTracker>
        <WeeklyList data={ workhours } />
      </CardTracker>
      <CardTimer>
        {renderTimes}
      </CardTimer>
      <CardAddWorkhour>
        <AddHours />
      </CardAddWorkhour>
      <CardReminder>
        <Text size="sm">
          <strong>Reminder:</strong><br />
          You should be working a maximum of <strong>10h a day</strong> and <strong>45h per week</strong>.
        </Text>
      </CardReminder>
    </StyledContent>
  );
};
