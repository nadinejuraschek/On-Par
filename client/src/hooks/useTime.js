// NPM PACKAGES
import moment from 'moment';

moment.updateLocale('en', {
  week: {
    dow : 1, // Monday is the first day of the week.
  }
});

export const getAge = date => {
  const currentDate = moment(new Date());
  let age;

  if (currentDate.diff(date, 'weeks') < 1) {
    age = currentDate.diff(date, 'days') + ' day(s) old';
  } else if (currentDate.diff(date, 'months') < 1) {
    age = currentDate.diff(date, 'weeks') + ' week(s) old';
  } else if (currentDate.diff(date, 'years') < 1) {
    age = currentDate.diff(date, 'months') + ' month(s) old';
  } else if (currentDate.diff(date, 'years') > 1) {
    age = currentDate.diff(date, 'years') + ' year(s) old';
  };

  return age;
};

export const convertHours = time => {
  const hoursMinutes = time.split(/[.:]/);
  const hours = parseInt(hoursMinutes[0], 10);
  const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return (hours + minutes / 60).toFixed(2);
};

export const minToH = time => {
  const h = (time / 60);
  const roundedH = Math.floor(h);
  const min = (h - roundedH) * 60;
  const roundedMin = ('0' + Math.round(min)).slice(-2);
  return `${roundedH}:${roundedMin}`;
}

export const minToHandMin = time => {
  const h = (time / 60);
  const roundedH = Math.floor(h);
  const min = (h - roundedH) * 60;
  const roundedMin = ('0' + Math.round(min)).slice(-2);
  return `${roundedH}h ${roundedMin}min`;
}

export const duration = (start, end) => {
  const timeDifference = minToH(moment(start).diff(end, "minutes"));
  return timeDifference;
}
