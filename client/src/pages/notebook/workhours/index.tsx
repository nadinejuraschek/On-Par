import { Card, Tabs, Text, Timer, WeeklyHours as WeeklyList } from "components";
import { useMemo, useState } from "react";

import { AddHours } from "./components/AddHours";
import styles from "./workhours.module.css";
import { useWorkhours } from "hooks";

const WORKHOURS_TABS = {
  WEEKLY: 0,
  DAILY: 1,
}

export const Workhours = (): JSX.Element => {
  const [tab, setTab] = useState( WORKHOURS_TABS.WEEKLY );
  const { todayWorkhours, workhours } = useWorkhours();

  const tabs = [
    { label: "Weekly", value: WORKHOURS_TABS.WEEKLY },
    { disabled: true, label: "Daily", value: WORKHOURS_TABS.DAILY },
  ];

  const renderTimes = useMemo(() => <Timer time={ todayWorkhours } />, [todayWorkhours]);

  return (
    <main>
      <div className={ styles.layout }>
        <Text as="h2" className={ styles.header } size="xl" weight="bold">Your Workhours</Text>
        <div className={ styles.tabsWrapper }>
          <Tabs activeTab={ tab } fullWidth handleClick={ setTab } tabs={ tabs } variant="secondary" />
        </div>
        <Card className={ styles.tracker }>
          <WeeklyList data={ workhours } />
        </Card>
        <Card className={ styles.timer }>
          {renderTimes}
        </Card>
        <Card className={ styles.addContainer }>
          <AddHours />
        </Card>
        <Card className={ styles.reminder }>
          <Text size="sm">
            <strong>Reminder:</strong><br />
            You should be working a maximum of <strong>10h a day</strong> and <strong>45h per week</strong>.
          </Text>
        </Card>
      </div>
    </main>
  );
};
