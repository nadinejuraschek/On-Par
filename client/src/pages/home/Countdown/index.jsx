import { ProgressRing, Tabs } from "components";
import * as dayjs from "dayjs";

import { useEffect, useState } from "react";

import styles from "./countdown.module.css";

export const Countdown = ( { setMessage, startDate } ) => {
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
  const dayNum = currentDate.diff( startDate, "days" );

  useEffect( () => {
    if ( dayNum === 1 ) {
      setMessage( "Welcome to the USA!" );
    } else if ( dayNum === 2 ) {
      setMessage( "Have you made new friends, yet?" );
    } else if ( dayNum === 3 ) {
      setMessage( "Are you ready to meet your host family?" );
    } else if ( dayNum >= 28 && dayNum <= 31 ) {
      setMessage(
        "Congratulations! You have already spent a whole month in the US!"
      );
    } else if ( dayNum === 90 ) {
      setMessage(
        "You have made it through the first quarter of your Au Pair experience!"
      );
    } else if ( dayNum === 180 ) {
      setMessage(
        "Halftime! Review the goals you have set for the year and make sure you make plans for the ones you haven't completed yet!"
      );
    } else if ( dayNum >= 270 && dayNum <= 330 ) {
      setMessage(
        "Time to think of extension! Add your planned departure date on your profile page."
      );
    } else if ( dayNum >= 351 && dayNum <= 366 ) {
      setMessage( "Make the most of your last few days!" );
    } else {
      setMessage( "What can I help you with?" );
    }
  }, [dayNum, setMessage] );

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
          radius="60"
          stroke="4"
          progress={ progress() }
          label={ progressLabel() }
        />
      </div>
      <Tabs activeTab={ tab } fullWidth handleClick={ setTab } spaceBetween tabs={ tabs } variant="secondary" />
    </div>
  );
};
