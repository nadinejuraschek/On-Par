import * as dayjs from "dayjs";
import { ProgressRing, Tabs } from "components";
import { useEffect, useMemo, useState } from "react";
import { Content, Wrapper } from "./styled";
import { ICountdown } from "./types";

export const COUNTDOWN_TABS = {
  DAYS: 0,
  WEEKS: 1,
  MONTHS: 2,
};

export const Countdown = ( {
  setMessage,
  startDate,
}: ICountdown ): JSX.Element => {
  const [tab, setTab] = useState( COUNTDOWN_TABS.DAYS );

  const currentDate = useMemo(() => dayjs( new Date() ), []);
  const daysPassed = useMemo(() => currentDate.diff( startDate, "days" ), [currentDate, startDate]);
  const weeksPassed = useMemo(() => currentDate.diff( startDate, "weeks" ), [currentDate, startDate]);
  const monthsPassed = useMemo(() => currentDate.diff( startDate, "months" ), [currentDate, startDate]);

  const tabs = useMemo(() => ([
    { label: "Days", value: COUNTDOWN_TABS.DAYS },
    { label: "Weeks", value: COUNTDOWN_TABS.WEEKS },
    { label: "Months", value: COUNTDOWN_TABS.MONTHS },
  ]), []);

  useEffect( () => {
    if ( daysPassed === 0 || daysPassed === 1 ) {
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

  const progress = useMemo(() => {
    if ( tab === COUNTDOWN_TABS.DAYS ) return ( 100 / 365 ) * daysPassed;
    if ( tab === COUNTDOWN_TABS.WEEKS ) return ( 100 / 52 ) * weeksPassed;
    return ( 100 / 12 ) * monthsPassed;
  }, [daysPassed, monthsPassed, tab, weeksPassed]);

  const progressLabel = useMemo(() => {
    if ( tab === COUNTDOWN_TABS.DAYS ) return daysPassed;
    if ( tab === COUNTDOWN_TABS.WEEKS ) return weeksPassed;
    return monthsPassed;
  }, [daysPassed, monthsPassed, tab, weeksPassed]);

  return (
    <Wrapper>
      <Content>
        <ProgressRing
          radius={60}
          stroke={4}
          progress={ progress }
          label={ progressLabel }
        />
      </Content>
      <Tabs
        activeTab={ tab }
        fullWidth
        handleClick={ setTab }
        spaceBetween
        tabs={ tabs }
        variant="secondary"
      />
    </Wrapper>
  );
};
