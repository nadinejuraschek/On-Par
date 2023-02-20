import { Card, Tabs, Text, Timer, WeeklyHours as WeeklyList } from "components";
import { WorkhourContext } from "contexts";
import { useContext, useState } from "react";

import { AddHours } from "./components/AddHours";
import styles from "./workhours.module.css";

export const Workhours = () => {
  const [tab, setTab] = useState( "weekly" );
  const { getWorkhours, todayHours, workhours } = useContext( WorkhourContext );

  const tabs = [
    { label: "Weekly", value: "weekly" },
    { disabled: true, label: "Daily", value: "daily" },
  ];

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
          <Timer time={ todayHours } />
        </Card>
        <Card className={ styles.addContainer }>
          <AddHours updateWorkhours={ getWorkhours } />
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
