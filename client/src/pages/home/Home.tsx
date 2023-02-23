import { Button, Card } from "components";
import { useContext, useState } from "react";

import { Countdown } from "./Countdown";
import { DailyPlan } from "./DailyPlan";
import { Greeting } from "./Greeting";
import { Quicklinks } from "./Quicklinks";
import { Reminders } from "./Reminders";
import { UserContext } from "contexts";
import { WorkhourSummary } from "./WorkhourSummary";
import axios from "axios";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

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

        <Card className={ styles.hours }>
          <WorkhourSummary />
        </Card>

        <Card className={ styles.today }>
          <DailyPlan />
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
      </div>
    </main>
  );
};
