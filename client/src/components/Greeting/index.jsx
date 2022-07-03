import { useEffect, useState } from "react";
import styles from "./greeting.module.css";
import blankProfile from "../../images/blankProfile.svg";

export const Greeting = ( { message, name } ) => {
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const date = `${ month }/${ day }`;
  const time = new Date().getHours();
  const [ greeting, setGreeting ] = useState();

  useEffect( () => {
    if ( date === "12/24" || date === "12/25" ) {
      setGreeting( `Merry Christmas, ${ name }!` );
    } else if ( date === "12/31" || date === "1/1" ) {
      setGreeting( `Happy New Year, ${ name }!` );
    } else if ( time > 6 && time < 11 ) {
      setGreeting( `Good morning, ${ name }!` );
    } else if ( time >= 11 && time < 15 ) {
      setGreeting( `It's lunchtime, ${ name }!` );
    } else if ( time >= 15 && time < 18 ) {
      setGreeting( `Good afternoon, ${ name }!` );
    } else if ( time >= 18 && time < 23 ) {
      setGreeting( `Good evening, ${ name }!` );
    } else {
      setGreeting( `Up so late, ${ name }?` );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );

  return (
    <>
      <div className={ styles.greeting }>
        <img className={ styles.profile } src={ blankProfile } alt={ name } />
        <h2>{ greeting }</h2>
      </div>
      <h4 className={ styles.message }>{ message }</h4>
    </>
  );
};
