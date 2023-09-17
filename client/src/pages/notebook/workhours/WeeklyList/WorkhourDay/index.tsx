import { Button, Icon } from "components";
import * as dayjs from "dayjs";
import { useMemo, useState } from "react";
import { TimeUtils } from "utils";
import { AddHoursInput } from "./AddHoursInput";
import { WeekhourDayCol as Col } from "./Col";
import { CollapsedContent } from "./CollapsedContent";
import { Actions, Content, Row, StyledItem } from "./styled";
import { IWorkhourDay } from "./types";

export const WorkhourDay = ({ day, hours }: IWorkhourDay): JSX.Element => {
  const [addHours, setAddHours] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const renderCollapsedContent = useMemo(() => {
    if (isCollapsed || !hours?.[0]) return null;

    return hours[0].hours.map((item) => <CollapsedContent hours={item} itemId={hours[0]._id} key={item._id} />);
  }, [hours, isCollapsed]);

  const totalHours = useMemo(() => {
    const todaysHours = hours.find(item => dayjs(item.date).set("hour", 12).set("minute", 0).set("second", 0).set("millisecond", 0).toISOString() === dayjs(day).set("hour", 12).set("minute", 0).set("second", 0).set("millisecond", 0).toISOString());

    return todaysHours?.total ?? 0;
  }, [day, hours]);

  const isOvertime = totalHours > 600;

  const renderToggleCollapse = useMemo(() => {
    if (totalHours === 0) return null;

    return (
      <Button
        handleClick={() => setIsCollapsed(!isCollapsed)}
        square
        variant="quarternary"
      >
        <Icon type={isCollapsed ? "chevronDown" : "chevronUp"} />
      </Button>
    );
  }, [isCollapsed, totalHours]);

  const renderAddHours = useMemo(() => {
    if (!addHours) return null;

    return <Row><AddHoursInput day={day} /></Row>;
  }, [addHours, day]);

  const renderStartTrackerButton = useMemo(() => {
    const formattedDay = dayjs(day).format("YY-MM-DD");
    const formattedToday = dayjs().format("YY-MM-DD");

    if (formattedDay !== formattedToday) return null;

    return (
      <Button disabled square variant="primary">
        <Icon type="play"/>
      </Button>
    );
  }, [day]);

  return (
    <StyledItem>
      <Col
        label={dayjs(day).format("ddd")}
        value={`${dayjs(day).format("MMM")} ${dayjs(day).format("DD")}`}
        withPadding
      />
      <Content>
        <Row>
          <Col
            color={isOvertime ? "--error_600" : "--success_700"}
            label="Total"
            value={totalHours === 0 ? "0:00 h" : `${TimeUtils.minToH(totalHours)} h`}
            weight={isOvertime ? "bold" : "regular"}
            withPadding
          />
          { renderToggleCollapse }
        </Row>
        { renderCollapsedContent }
        { renderAddHours }
      </Content>
      <Actions>
        <Button handleClick={addHours ? () => {} : () => setAddHours(true)} square variant="tertiary">
          <Icon type={addHours ? "check" : "plus"} />
        </Button>
        { renderStartTrackerButton }
      </Actions>
    </StyledItem>
  );
};
