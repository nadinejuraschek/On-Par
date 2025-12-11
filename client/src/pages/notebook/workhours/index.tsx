import { Header, LoadingSpinner, Text, Timer, WeeklyHours as WeeklyList } from "components";
import { useMemo } from "react";
import { AddHours } from "./AddHours";
import { CardAddWorkhour, CardReminder, CardTimer, CardTracker, StyledContent } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { getWorkhours } from "api";

const Workhours = (): JSX.Element => {
  const {
    data: todayWorkhours,
    // TODO: display error message
    // isError,
    isLoading,
  } = useQuery({
    queryKey: ["workhours"],
    queryFn: () => getWorkhours({ filter: "today" }),
  });

  const renderTimes = useMemo(() => <Timer time={ todayWorkhours?.[0]?.total ?? 0 } />, [todayWorkhours]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

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