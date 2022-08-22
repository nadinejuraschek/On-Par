import moment from "moment";
import { useEffect, useState } from "react";
import styles from "./countdown.module.css";
import { ProgressRing } from "../ProgressRing";

export const Countdown = ( { startDate, setMessage } ) => {
  const currentDate = new Date();
  const [tab, setTab] = useState( "days" );
  const daysPassed = moment( currentDate ).diff( startDate, "days" );
  const weeksPassed = moment( currentDate ).diff( startDate, "weeks" );
  const monthsPassed = moment( currentDate ).diff( startDate, "months" );
  const dayNum = moment( currentDate ).diff( startDate, "days" );

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
    } else if ( dayNum >= 351 ) {
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
      <div className={ styles.tabs }>
        <button
          className={ `${ styles.tab } ${ tab === "days" ? styles.active : null }` }
          onClick={ () => setTab( "days" ) }
        >
          Days
        </button>
        <button
          className={ `${ styles.tab } ${ tab === "weeks" ? styles.active : null }` }
          onClick={ () => setTab( "weeks" ) }
        >
          Weeks
        </button>
        <button
          className={ `${ styles.tab } ${ tab === "months" ? styles.active : null }` }
          onClick={ () => setTab( "months" ) }
        >
          Months
        </button>
      </div>
    </div>
  );
};
