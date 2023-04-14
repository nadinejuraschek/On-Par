import { holidays, mockBirthdays } from 'data';

import { EventsList } from './List';
import { Text } from "components";
import styles from "./events.module.css";

export const Events = (): JSX.Element => {
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  const currentHolidays = holidays.filter(holiday => holiday.month === currentMonth && holiday.day === currentDay);

  const remainingHolidaysThisMonth = holidays.filter(holiday => holiday.month === currentMonth && holiday.day > currentDay);

  const currentBirthdays = mockBirthdays.filter(day => day.month === currentMonth && day.day === currentDay);

  const upcomingBirthdays = mockBirthdays.filter(day => day.month === currentMonth && day.day > currentDay);

  return (
    <div className={ styles.container }>
      <Text as="h3" size="lg" weight="bold">Events</Text>
      <div className={ styles.content }>
        <div className={ styles.listContent }>
          <Text as="h4" size="md" weight="bold">Today</Text>
          <EventsList
            emptyMessage="There are no holidays or events planned for today!"
            list={[...currentHolidays, ...currentBirthdays]}
          />
        </div>
        <div className={ styles.listContent }>
          <Text as="h4" size="md" weight="bold">Later This Month</Text>
          <EventsList
            emptyMessage="Looks like you'll have lots of free time!"
            list={[...remainingHolidaysThisMonth, ...upcomingBirthdays]}
          />
        </div>
      </div>
    </div>
  );
};
