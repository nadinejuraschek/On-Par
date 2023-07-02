import * as dayjs from "dayjs";
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import { Button, Card, Resources as ResourcesList, Text } from "components";
import { useCallback, useContext, useMemo, useState } from "react";

import { Countdown } from "./Countdown";
import { Events } from "./Events";
import { Goals } from "./Goals";
import { Greeting } from "./Greeting";
import { Quicklinks } from "./Quicklinks";
import { UserContext } from "contexts";
import { WorkhourSummary } from "./WorkhourSummary";
import axios from "axios";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className={ styles.grid }>
      <Card className={ styles.header }>
        <Greeting message={ message } name={ user?.firstname } />
        <div className={ styles.buttons }>
          <Button link="/profile" variant="secondary">Profile</Button>
          <Button handleClick={ handleLogout } variant="secondary">Log Out</Button>
        </div>
      </Card>

      {hasCompletedYear ? (
        <>
          <Card className={ styles.complete }>
            <Text size="xl" weight="bold">Congrats!</Text>
            <Text size="lg" weight="bold">You finished your au pair experience!</Text>
          </Card>

          <Card className={ styles.resources }>
            <Text size="lg" weight="bold">Helpful Resources</Text>
            <ResourcesList />
          </Card>
        </>
      ) : (
        <>
          <Card className={ styles.hours }>
            <WorkhourSummary />
          </Card>

          <Card className={ styles.today }>
            <Events />
          </Card>

          <Card className={ styles.reminders }>
            <Goals />
          </Card>

          <Card className={ styles.countdown }>
            <Countdown
              startDate={ user?.startDate }
              setMessage={ setMessage }
            />
          </Card>

          <Card className={ styles.misc }>
            <Quicklinks />
          </Card>
        </>
      )}
    </div>
  );
};