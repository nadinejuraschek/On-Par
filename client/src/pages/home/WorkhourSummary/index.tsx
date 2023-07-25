import { Button, LoadingPlaceholder, Tabs } from "components";
import { useWorkhours } from "hooks";
import { useMemo, useState } from "react";
import {
  Container,
  LoadingProgressContainer,
  Progress,
  ProgressContainer,
  ProgressLabel,
} from "./styled";

const WORKHOUR_TABS = {
  DAY: 0,
  WEEK: 1,
}

export const WorkhourSummary = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(WORKHOUR_TABS.DAY);

  const tabs = [
    { label: "Today", value: WORKHOUR_TABS.DAY }, { label: "This Week", value: WORKHOUR_TABS.WEEK },
  ];

  const { loading, todayWorkhours } = useWorkhours();

  const renderDailyProgress = useMemo(() => {
    const inPercent = (todayWorkhours/600)*100;
    const inHours = todayWorkhours/60;

    return (
      <ProgressContainer>
        <Progress
          isOverwork={inHours > 10}
          percentage={inPercent}
        />
        <ProgressLabel
          color={inHours > 10 ? "--error_700" : "--secondary_700"}
          size="sm"
        >
          <strong>{inHours}</strong> / 10 hours
        </ProgressLabel>
      </ProgressContainer>
    );
  }, [todayWorkhours]);

  // TODO: calculate weekly hours
  const renderWeeklyProgress = useMemo(() => (
    <ProgressContainer>
      <Progress />
      <ProgressLabel
        color={"--secondary_700"}
        size="sm"
      >
        <strong>XX</strong> / 45 hours
      </ProgressLabel>
    </ProgressContainer>
  ), []);

  const renderContent = useMemo(() => {
    if (loading) {
      <LoadingProgressContainer>
        <LoadingPlaceholder />
      </LoadingProgressContainer>
    }

    return activeTab === WORKHOUR_TABS.DAY ? renderDailyProgress : renderWeeklyProgress;
  }, [activeTab,
    loading,
    renderDailyProgress,
    renderWeeklyProgress]);

  return (
    <Container>
      <Tabs activeTab={ activeTab } handleClick={ setActiveTab }  tabs={ tabs } variant="secondary" />
      { renderContent }
      <Button link="/notebook/workhours" variant="primary">Go to Workhours Log</Button>
    </Container>
  );
};