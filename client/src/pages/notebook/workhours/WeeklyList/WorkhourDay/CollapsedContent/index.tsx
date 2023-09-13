import { Button, Icon } from "components";
import * as dayjs from "dayjs";
import { useCreateWorkhours } from "hooks";
import { useCallback, useMemo, useState } from "react";
import { TWorkhoursFormData, workhoursSchema } from "schema/workhours.schema";
import { ZodFormattedError } from "zod";
import { TimeCol, TimeInput } from "./styled";
import { ICollapsedContent } from "./types";
import { WeekhourDayCol } from "../Col";
import { StyledDatePicker } from "../styled";

export const CollapsedContent = ({ hours }: ICollapsedContent): JSX.Element => {
  const today = new Date();

  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState<ZodFormattedError<TWorkhoursFormData> | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);
  const [workhoursData, setWorkhoursData] = useState<TWorkhoursFormData>({
    date: today,
    start: undefined,
    end: undefined,
  });

  const { createWorkhours } = useCreateWorkhours();

  const handleChange = useCallback((date: Date, name: string) => {
    setWorkhoursData( (prev) => ( { ...prev, [name]: date } ) );
  }, []);

  const handleSubmit = useCallback(() => {
    if (!workhoursData.start || !workhoursData.end) {
      setEditMode(false);
      return;
    }

    setSubmitting(true);

    const validation = workhoursSchema.safeParse(workhoursData);

    if (validation.success === false) {
      setErrors(validation.error.format());
      setSubmitting(false);
      return;
    }

    setErrors(undefined);

    const duration = dayjs( workhoursData.end ).diff( workhoursData.start, "minutes" );
    const newHours = {
      date: workhoursData.date,
      hours: [{
        start: workhoursData.start,
        end: workhoursData.end,
        duration: duration,
      }],
    };

    createWorkhours(newHours);
    setSubmitting(false);
    setEditMode(false);
    // TODO: refetch hours
  }, [createWorkhours, workhoursData]);

  const renderStartTime = useMemo(() => {
    if (!editMode) {
      if (!hours?.start) return <WeekhourDayCol label="From" value="--:-- AM" />;

      const start = dayjs(hours.start).format("hh:mm A");
      return <WeekhourDayCol label="From" value={start} />
    }

    return (
      <StyledDatePicker
        error={errors?.start?._errors?.[0] && errors.start._errors[0]}
        format="hh:mma"
        handleChange={(selected: Date) => {
          const newDate = hours.start.setHours(selected.getHours(), selected.getMinutes());
          handleChange(new Date(newDate), "start");
        }}
        name="start"
        value={hours.start}
      />
    );
  }, [editMode,
    errors,
    handleChange,
    hours]);

  const renderEndTime = useMemo(() => {
    if (!editMode) {
      if (!hours?.end) return <WeekhourDayCol label="From" value="--:-- AM" />;

      const end = dayjs(hours.end).format("hh:mm A");
      return <WeekhourDayCol label="To" value={end} />
    }

    return (
      <StyledDatePicker
        error={errors?.end?._errors?.[0] && errors.end._errors[0]}
        format="hh:mma"
        handleChange={(selected: Date) => {
          const newDate = hours.end.setHours(selected.getHours(), selected.getMinutes());
          handleChange(new Date(newDate), "end");
        }}
        name="end"
        value={hours.end}
      />
    );
  }, [editMode,
    errors,
    handleChange,
    hours]);

  return (
    <TimeCol>
      <TimeInput>
        {renderStartTime}
        <span>&mdash;</span>
        {renderEndTime}
      </TimeInput>
      <Button
        loading={submitting}
        handleClick={editMode ? handleSubmit : () => setEditMode(true)}
        square
        variant="tertiary"
      >
        <Icon type={editMode ? "check" : "pen"} />
      </Button>
    </TimeCol>
  );
}