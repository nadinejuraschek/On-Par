import axios from "axios";
import { Button, Resources as ResourcesList, Text } from "components";
import { UserContext } from "contexts";
import * as dayjs from "dayjs";
import * as isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import { useCallback, useContext, useMemo, useState } from "react";
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

dayjs.extend(isSameOrAfter);

export const Home = (): JSX.Element => {
  const { user } = useContext( UserContext );
  const [message, setMessage] = useState( "" );

  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    axios( {
      url: "/api/user/signout",
      method: "POST",
    } ).then( () => {
      navigate( "/login" );
    } );
  }, [navigate]);

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
        <Greeting message={ message } name={ user?.firstname } profileImageSrc={user?.profileImage} />
        <ButtonsWrapper>
          <Button link="/profile" variant="secondary">Profile</Button>
          <Button handleClick={ handleLogout } variant="secondary">Log Out</Button>
        </ButtonsWrapper>
      </HeaderCard>

      {renderContent}
    </Grid>
  );
};