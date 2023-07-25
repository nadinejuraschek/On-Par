import { Badge, Button } from "components";
import * as dayjs from "dayjs";
import * as duration from "dayjs/plugin/duration";
import * as isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { MouseEvent, useCallback, useMemo } from "react";
import {
  Actions,
  Badges,
  Date,
  DayMonth,
  LateBadge,
  ListItem,
  Year,
} from "./styled";
import { IPaymentEntry } from "./types";

dayjs.extend(duration);
dayjs.extend(isSameOrBefore);

export const Payment = ( {
  handleEdit,
  payment,
}: IPaymentEntry ): JSX.Element => {
  const { date, late, week } = payment;

  const handleEditClick = useCallback((event: MouseEvent) => {
    event.preventDefault();
    handleEdit();
  }, [handleEdit]);

  const renderDateColumn = useMemo(() => {
    if (!date) return null;

    return (
      <>
        <DayMonth>{dayjs(date).format("DD MMM")}</DayMonth>
        <Year>{dayjs(date).format("YYYY")}</Year>
      </>
    );
  }, [date]);

  const renderLateBadge = useMemo(() => {
    if (!late) return null;
    return <LateBadge icon={<i className="clock outline icon"></i>} label="Paid Late" />;
  }, [late]);

  return (
    <ListItem warning={!date}>
      <Date>{ renderDateColumn }</Date>
      <Badges>
        {renderLateBadge}
        <Badge label={`Week #${week}`} />
      </Badges>
      <Actions>
        <Button
          handleClick={handleEditClick}
          square
          variant="tertiary"
        >
          <i className="edit outline icon"></i>
        </Button>
      </Actions>
    </ListItem>
  );
};
