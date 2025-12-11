import { Button, Resources as ResourcesList, Text } from "components";
import * as dayjs from "dayjs";
import * as isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Countdown } from "./Countdown";
import { Events } from "./Events";
import { Goals } from "./Goals";
import { Greeting } from "./Greeting";
import { Quicklinks } from "./Quicklinks";
import {
  ButtonsWrapper,
  CompletedYearCard,
  CountdownCard,
  Grid,
  HeaderCard,
  HoursCard,
  MiscCard,
  RemindersCard,
  ResourcesCard,
  TodayCard,
} from "./styled";
import { WorkhourSummary } from "./WorkhourSummary";
import { logoutUser as logoutUserFn } from "api";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TUser } from "contexts/UserContext/types";

dayjs.extend(isSameOrAfter);

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [message, setMessage] = useState( "" );

  const user: TUser | undefined = queryClient.getQueryData(["user"]);

  if (!user) {
    navigate("/");
  }

  const { mutate: logoutUser, isPending } = useMutation({
    mutationFn: logoutUserFn,
    onError: () => {
      toast.error("Could not log out. Please try again.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/");
    },
  });

  const hasCompletedYear = useMemo(() => dayjs(new Date()).isSameOrAfter(user?.endDate), [user]);

  const renderContent = useMemo(() => {
    if (hasCompletedYear) {
      return (
        <>
          <CompletedYearCard>
            <Text size="xl" weight="bold">Congrats!</Text>
            <Text size="lg" weight="bold">You finished your au pair experience!</Text>
          </CompletedYearCard>

          <ResourcesCard>
            <Text size="lg" weight="bold">Helpful Resources</Text>
            <ResourcesList />
          </ResourcesCard>
        </>
      );
    }

    return (
      <>
        <HoursCard>
          <WorkhourSummary />
        </HoursCard>

        <TodayCard>
          <Events />
        </TodayCard>

        <RemindersCard>
          <Goals />
        </RemindersCard>

        <CountdownCard>
          <Countdown
            startDate={ user?.startDate }
            setMessage={ setMessage }
          />
        </CountdownCard>

        <MiscCard>
          <Quicklinks />
        </MiscCard>
      </>
    );
  }, [hasCompletedYear, user]);

  return (
    <Grid>
      <HeaderCard>
        <Greeting
          message={ message }
          name={ user?.firstname ?? "" }
          profileImageSrc={user?.profileImage ?? ""}
        />
        <ButtonsWrapper>
          <Button link="/profile" variant="secondary">Profile</Button>
          <Button handleClick={ logoutUser } loading={isPending}  variant="secondary">Log Out</Button>
        </ButtonsWrapper>
      </HeaderCard>

      {renderContent}
    </Grid>
  );
};

export default Home;