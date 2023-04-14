import { Button, LoadingPlaceholder, Tabs, Text } from "components";
import { useContext, useMemo, useState } from "react";

import { WorkhourContext } from "contexts";
import styles from "./workhour.module.css";

enum WORKHOUR_TABS {
  DAY = 0,
  WEEK = 1,
};

export const WorkhourSummary = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(WORKHOUR_TABS.DAY);

  const tabs = [
    { label: "Today", value: WORKHOUR_TABS.DAY },
    { label: "This Week", value: WORKHOUR_TABS.WEEK }
  ];

  const { todayHours } = useContext( WorkhourContext );

  const renderDailyProgress = useMemo(() => {
    if (!todayHours) {
      <div className={ styles.loadingProgressContainer }>
        <LoadingPlaceholder />
      </div>
    }

    const inPercent = (todayHours/600)*100;
    const inHours = todayHours/60;

    return (
      <div className={ styles.progressContainer }>
        <div
          className={ `${styles.progress} ${inHours > 10 && styles.red}` }
          style={{ width: `${inPercent}%` }}
        />
        <Text
          className={ styles.progressLabel }
          color={inHours > 10 ? '--error_700' : '--secondary_700'}
          size="sm"
        >
          <strong>{inHours}</strong> / 10 hours
        </Text>
      </div>
    );
  }, [todayHours]);

  // TODO: calculate weekly hours
  const renderWeeklyProgress = useMemo(() => (
    <div className={ styles.progressContainer }>
      <div className={ styles.progress } />
      <Text
        className={ styles.progressLabel }
        color={"--secondary_700"}
        size="sm"
      >
        <strong>XX</strong> / 45 hours
      </Text>
    </div>
  ), []);

  return (
    <div className={ styles.container }>
      <Tabs activeTab={ activeTab } handleClick={ setActiveTab }  tabs={ tabs } variant="secondary" />
      { activeTab === WORKHOUR_TABS.DAY ? renderDailyProgress : renderWeeklyProgress }
      <Button link="/notebook/workhours" variant="primary">Go to Workhours Log</Button>
    </div>
  );
};