import { IGreeting } from "./types";
import { Text } from "components";
import blankProfile from "images/blankProfile.svg";
import styles from "./greeting.module.css";
import { useMemo } from "react";

export const Greeting = ( { message, name }: IGreeting ): JSX.Element => {
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const date = `${ month }/${ day }`;
  const time = new Date().getHours();

  const greeting = useMemo(() => {
    if ( date === "12/24" || date === "12/25" ) {
      return `Merry Christmas, ${ name }!`;
    } else if ( date === "12/31" || date === "1/1" ) {
      return `Happy New Year, ${ name }!`;
    } else if ( time > 6 && time < 11 ) {
      return `Good morning, ${ name }!`;
    } else if ( time >= 11 && time < 15 ) {
      return `It's lunchtime, ${ name }!`;
    } else if ( time >= 15 && time < 18 ) {
      return `Good afternoon, ${ name }!`;
    } else if ( time >= 18 && time < 23 ) {
      return `Good evening, ${ name }!`;
    } else {
      return `Up so late, ${ name }?`;
    }
  }, [date, name, time]);

  return (
    <div className={ styles.greeting }>
      {/* @ts-ignore-next-line */}
      <img className={ styles.profile } src={ blankProfile } alt={ name } />
      <div className={ styles.messages }>
        <Text as="h2" size="lg" weight="bold">{ greeting }</Text>
        <Text as="h4" size="md">{ message }</Text>
      </div>
    </div>
  );
};
