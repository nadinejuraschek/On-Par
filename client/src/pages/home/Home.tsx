import * as dayjs from "dayjs";
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import { Button, Card, Resources as ResourcesList, Text } from "components";
import { useContext, useState } from "react";

import { Countdown } from "./Countdown";
import { Events } from "./Events";
import { Greeting } from "./Greeting";
import { LoadingSpinner } from "components";
import { Quicklinks } from "./Quicklinks";
import { Reminders } from "./Reminders";
import { UserContext } from "contexts";
import { WorkhourSummary } from "./WorkhourSummary";
import axios from "axios";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

dayjs.extend(isSameOrAfter);

export const Home = (): JSX.Element => {
  /* @ts-ignore-next-line */
  const [user] = useContext( UserContext );
  const [message, setMessage] = useState( "" );

  const navigate = useNavigate();

  const handleLogout = () => {
    axios( {
      url: "/api/user/signout",
      method: "POST",
    } ).then( () => {
      navigate( "/login" );
    } );
  };

  if (!user) {
    return <LoadingSpinner />;
  }

  const currentDate = dayjs( new Date() );
  const hasCompletedYear = dayjs(currentDate).isSameOrAfter(user.endDate);

  return (
    <main>
      <div className={ styles.grid }>
        <Card className={ styles.header }>
          <Greeting message={ message } name={ user.firstname } />
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
                <Reminders />
              </Card>

              <Card className={ styles.countdown }>
                <Countdown
                  startDate={ user.startDate }
                  endDate={ user.endDate }
                  message={ message }
                  setMessage={ setMessage }
                />
              </Card>

              <Card className={ styles.misc }>
                <Quicklinks />
              </Card>
            </>
          )}
      </div>
    </main>
  );
};
