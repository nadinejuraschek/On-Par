import * as dayjs from "dayjs";
import "dayjs/locale/en";

const dayjsDuration = require( "dayjs/plugin/duration" );

dayjs.locale( "en" );
dayjs.extend( dayjsDuration );

const getAge = date => {
  const currentDate = dayjs( new Date() );

  let age;

  if ( currentDate.diff( date, "weeks" ) < 1 ) {
    age = currentDate.diff( date, "days" ) + " day(s) old";
  } else if ( currentDate.diff( date, "months" ) < 1 ) {
    age = currentDate.diff( date, "weeks" ) + " week(s) old";
  } else if ( currentDate.diff( date, "years" ) < 1 ) {
    age = currentDate.diff( date, "months" ) + " month(s) old";
  } else if ( currentDate.diff( date, "years" ) > 1 ) {
    age = currentDate.diff( date, "years" ) + " year(s) old";
  }

  return age;
};

const convertHours = time => {
  const hoursMinutes = time.split( /[.:]/ );
  const hours = parseInt( hoursMinutes[0], 10 );
  const minutes = hoursMinutes[1] ? parseInt( hoursMinutes[1], 10 ) : 0;
  return ( hours + minutes / 60 ).toFixed( 2 );
};

const minToH = time => {
  const h = ( time / 60 );
  const roundedH = Math.floor( h );
  const min = ( h - roundedH ) * 60;
  const roundedMin = ( "0" + Math.round( min ) ).slice( -2 );
  return `${ roundedH }:${ roundedMin }`;
};

const minToHandMin = time => {
  const h = ( time / 60 );
  const roundedH = Math.floor( h );
  const min = ( h - roundedH ) * 60;
  const roundedMin = ( "0" + Math.round( min ) ).slice( -2 );
  return `${ roundedH }h ${ roundedMin }min`;
};

const duration = ( start, end ) => {
  return minToH( start.diff( end, "minutes" ) );
};

export const TimeUtils = {
  convertHours,
  duration,
  getAge,
  minToH,
  minToHandMin,
};
