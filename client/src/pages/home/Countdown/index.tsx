import * as dayjs from "dayjs";

import { ProgressRing, Tabs } from "components";
import { useEffect, useState } from "react";

import { ICountdown } from "./types";
import styles from "./countdown.module.css";

export const Countdown = ( { setMessage, startDate }: ICountdown ): JSX.Element => {
  const [tab, setTab] = useState( "days" );

  const tabs = [
    { label: "Days", value: "days" },
    { label: "Weeks", value: "weeks" },
    { label: "Months", value: "months" },
  ];

  const currentDate = dayjs( new Date() );
  const daysPassed = currentDate.diff( startDate, "days" );
  const weeksPassed = currentDate.diff( startDate, "weeks" );
  const monthsPassed = currentDate.diff( startDate, "months" );

  useEffect( () => {
    if ( daysPassed === 1 ) {
      setMessage( "Welcome to the USA!" );
    } else if ( daysPassed === 2 ) {
      setMessage( "Have you made new friends, yet?" );
    } else if ( daysPassed === 3 ) {
      setMessage( "Are you ready to meet your host family?" );
    } else if ( daysPassed >= 28 && daysPassed <= 31 ) {
      setMessage(
        "Congratulations! You have already spent a whole month in the US!"
      );
    } else if ( daysPassed === 90 ) {
      setMessage(
        "You have made it through the first quarter of your Au Pair experience!"
      );
    } else if ( daysPassed === 180 ) {
      setMessage(
        "Halftime! Review the goals you have set for the year and make sure you make plans for the ones you haven't completed yet!"
      );
    } else if ( daysPassed >= 270 && daysPassed <= 330 ) {
      setMessage(
        "Time to think of extension! Add your planned departure date on your profile page."
      );
    } else if ( daysPassed >= 351 && daysPassed <= 366 ) {
      setMessage( "Make the most of your last few days!" );
    } else {
      setMessage( "What can I help you with?" );
    }
  }, [daysPassed, setMessage] );

  const progress = () => {
    if ( tab === "days" ) ( 100 / 365 ) * daysPassed;
    if ( tab === "weeks" ) ( 100 / 52 ) * weeksPassed;
    return ( 100 / 12 ) * monthsPassed;
  };

  const progressLabel = () => {
    if ( tab === "days" ) daysPassed;
    if ( tab === "weeks" ) weeksPassed;
    return monthsPassed;
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.body }>
        <ProgressRing
          radius={60}
          stroke={4}
          progress={ progress() }
          label={ progressLabel() }
        />
      </div>
      <Tabs
        activeTab={ tab }
        fullWidth
        handleClick={ setTab }
        spaceBetween
        tabs={ tabs }
        variant="secondary"
      />
    </div>
  );
};
