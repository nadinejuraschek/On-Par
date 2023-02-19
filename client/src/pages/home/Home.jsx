import axios from "axios";
import {
  Countdown,
  Greeting,
  ReminderView as Reminders,
  TodayView as Today,
  WorkhourView as Workhours,
} from "components";

import { Button } from "components";
import { UserContext } from "contexts";
import emergencyphone from "images/emergency-call.svg";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./home.module.css";

export const Home = () => {
  const [user] = useContext( UserContext );
  const [message, setMessage] = useState( "" );

  const navigate = useNavigate();

  const handleLogout = () => {
    axios( {
      url: "/api/user/signout",
      method: "POST",
    } ).then( res => {
      navigate( "/login" );
    } );
  };

  return (
    <main>
      <div className={ styles.grid }>
        <div className={ styles.header }>
          <Greeting message={ message } name={ user.firstname } />
          <div className={ styles.buttons }>
            <Button link="/profile" label="Profile" variant="secondary" />
            <Button label="Log Out" handleClick={ handleLogout } variant="secondary" />
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
          <Link to="/emergencynumbers" className={ styles.emergency }>
            <div className={ styles.helpIcon }>
              <img src={ emergencyphone } alt="Emergency Numbers" />
            </div>
            Emergency Numbers
          </Link>
        </div>
      </div>
    </main>
  );
};
