import { Button, LoadingPlaceholder, Tabs } from "components";
import { useFetchWorkhoursToday, useFetchWorkhoursWeekly } from "hooks";
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

  const { data: todayWorkhourTotal, loading: loadingWorkhoursToday } = useFetchWorkhoursToday();
  const {
    data: weeklyWorkhoursData,
    loading: loadingWorkhoursWeekly,
  } = useFetchWorkhoursWeekly({});

  const renderDailyProgress = useMemo(() => {
    const inPercent = (todayWorkhourTotal/600)*100;
    const inHours = todayWorkhourTotal/60;

    return (
      <ProgressContainer>
        <Progress
          $isOverwork={inHours > 10}
          $percentage={inPercent}
        />
        <ProgressLabel
          color={inHours > 10 ? "--error_700" : "--secondary_700"}
          size="sm"
        >
          <strong>{inHours}</strong> / 10 hours
        </ProgressLabel>
      </ProgressContainer>
    );
  }, [todayWorkhourTotal]);

  // TODO: calculate weekly hours
  const renderWeeklyProgress = useMemo(() => {
    const inPercent = (weeklyWorkhoursData.total/2700)*100;
    const inHours = weeklyWorkhoursData.total/60;

    return (
      <ProgressContainer>
        <Progress $isOverwork={inHours > 45} $percentage={inPercent} />
        <ProgressLabel
          color={inHours > 45 ? "--error_700" : "--secondary_700"}
          size="sm"
        >
          <strong>{inHours}</strong> / 45 hours
        </ProgressLabel>
      </ProgressContainer>
    );
  }, [weeklyWorkhoursData]);

  const renderContent = useMemo(() => {
    if (loadingWorkhoursToday || loadingWorkhoursWeekly) {
      <LoadingProgressContainer>
        <LoadingPlaceholder />
      </LoadingProgressContainer>
    }

    return activeTab === WORKHOUR_TABS.DAY ? renderDailyProgress : renderWeeklyProgress;
  }, [activeTab,
    loadingWorkhoursToday,
    loadingWorkhoursWeekly,
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