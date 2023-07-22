import { useMemo } from "react";
import { holidays, mockBirthdays } from 'data';
import { EventsList } from './List';
import { Text } from "components";
import { Content, ListContent, Wrapper } from './styled';

export const Events = (): JSX.Element => {
  const currentMonth = useMemo(() => new Date().getMonth() + 1, []);
  const currentDay = useMemo(() => new Date().getDate(), []);

  const currentHolidays = useMemo(() => (
    holidays.filter(holiday => holiday.month === currentMonth && holiday.day === currentDay)
  ), [currentDay, currentMonth]);

  const remainingHolidaysThisMonth = useMemo(() => (
    holidays.filter(holiday => holiday.month === currentMonth && holiday.day > currentDay)
  ), [currentDay, currentMonth]);

  const currentBirthdays = useMemo(() => (
    mockBirthdays.filter(day => day.month === currentMonth && day.day === currentDay)
  ), [currentDay, currentMonth]);

  const upcomingBirthdays = useMemo(() => (
    mockBirthdays.filter(day => day.month === currentMonth && day.day > currentDay)
  ), [currentDay, currentMonth]);

  return (
    <Wrapper>
      <Text as="h3" size="lg" weight="bold">Events</Text>
      <Content>
        <ListContent>
          <Text as="h4" size="md" weight="bold">Today</Text>
          <EventsList
            emptyMessage="There are no holidays or events planned for today!"
            list={[...currentHolidays, ...currentBirthdays]}
          />
        </ListContent>
        <ListContent>
          <Text as="h4" size="md" weight="bold">Later This Month</Text>
          <EventsList
            emptyMessage="Looks like you'll have lots of free time!"
            list={[...remainingHolidaysThisMonth, ...upcomingBirthdays]}
          />
        </ListContent>
      </Content>
    </Wrapper>
  );
};
