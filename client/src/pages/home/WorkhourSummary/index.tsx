import { Button, LoadingPlaceholder, Tabs } from "components";
import { useMemo, useState } from "react";
import {
  Container,
  LoadingProgressContainer,
  Progress,
  ProgressContainer,
  ProgressLabel,
} from "./styled";
import { useQuery } from "@tanstack/react-query";
import { getWorkhours } from "api";
import dayjs from "dayjs";

const WORKHOUR_TABS = {
  DAY: 0,
  WEEK: 1,
}

export const WorkhourSummary = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(WORKHOUR_TABS.DAY);

  const tabs = [
    { label: "Today", value: WORKHOUR_TABS.DAY }, { label: "This Week", value: WORKHOUR_TABS.WEEK },
  ];

  const {
    data: workhoursData,
    // TODO: display error message
    // isError,
    isLoading,
  } = useQuery({
    queryKey: ["workhours"],
    queryFn: () => getWorkhours({ filter: "weekly" }),
  });

  const renderDailyProgress = useMemo(() => {
    const todayHours = workhoursData?.find((day) => dayjs().isSame(day.date, 'day'))?.total ?? 0;
    const inPercent = (todayHours/600)*100;
    const inHours = todayHours/60;

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
  }, [workhoursData]);

  // TODO: calculate weekly hours
  const renderWeeklyProgress = useMemo(() => {
    return 'weekly';
    /* const inPercent = (workhoursData.total/2700)*100;
    const inHours = workhoursData.total/60;

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
    ); */
  }, []);

  const renderContent = useMemo(() => {
    if (isLoading) {
      <LoadingProgressContainer>
        <LoadingPlaceholder />
      </LoadingProgressContainer>
    }

    return activeTab === WORKHOUR_TABS.DAY ? renderDailyProgress : renderWeeklyProgress;
  }, [activeTab,
    isLoading,
    renderDailyProgress,
    renderWeeklyProgress]);

  return (
    <Container>
      <Tabs activeTab={ activeTab } handleClick={setActiveTab}  tabs={ tabs } variant="secondary" />
      { renderContent }
      <Button link="/notebook/workhours" variant="primary">Go to Workhours Log</Button>
    </Container>
  );
};