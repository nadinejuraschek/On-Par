import { Button, LoadingPlaceholder, Tabs, Text } from "components";
import { useMemo, useState } from "react";

import styles from "./workhour.module.css";
import { useWorkhours } from "hooks";

const WORKHOUR_TABS = {
  DAY: 0,
  WEEK: 1,
}

export const WorkhourSummary = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(WORKHOUR_TABS.DAY);

  const tabs = [
    { label: "Today", value: WORKHOUR_TABS.DAY },
    { label: "This Week", value: WORKHOUR_TABS.WEEK }
  ];

  const { loading, todayWorkhours } = useWorkhours();

  const renderDailyProgress = useMemo(() => {
    const inPercent = (todayWorkhours/600)*100;
    const inHours = todayWorkhours/60;

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
  }, [todayWorkhours]);

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

  const renderContent = useMemo(() => {
    if (loading) {
      <div className={ styles.loadingProgressContainer }>
        <LoadingPlaceholder />
      </div>
    }

    return activeTab === WORKHOUR_TABS.DAY ? renderDailyProgress : renderWeeklyProgress;
  }, [activeTab, loading, renderDailyProgress, renderWeeklyProgress]);

  return (
    <div className={ styles.container }>
      <Tabs activeTab={ activeTab } handleClick={ setActiveTab }  tabs={ tabs } variant="secondary" />
      { renderContent }
      <Button link="/notebook/workhours" variant="primary">Go to Workhours Log</Button>
    </div>
  );
};