import axios from "axios";
import {
  Button,
  Countdown,
  Greeting,
  ReminderView as Reminders,
  TodayView as Today,
  WorkhourView as Workhours,
} from "components";
import { UserContext } from "contexts";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import { Quicklinks } from "./Quicklinks";

export const Home = () => {
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
        <div className={ styles.header }>
          <Greeting message={ message } name={ user.firstname } />
          <div className={ styles.buttons }>
            <Button link="/profile" variant="secondary">Profile</Button>
            <Button handleClick={ handleLogout } variant="secondary">Log Out</Button>
          </div>
        </div>

        <div className={ styles.hours }>
          <Workhours />
        </div>

        <div className={ styles.today }>
          <Today />
        </div>

        <div className={ styles.reminders }>
          <Reminders />
        </div>

        <div className={ styles.countdown }>
          <Countdown
            startDate={ user.startDate }
            endDate={ user.endDate }
            message={ message }
            setMessage={ setMessage }
          />
        </div>

        <div className={ styles.misc }>
          <Quicklinks />
        </div>
      </div>
    </main>
  );
};
