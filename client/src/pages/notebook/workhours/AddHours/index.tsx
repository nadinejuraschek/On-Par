import { Button, DatePicker, Text } from "components";
import * as dayjs from "dayjs";
import { useWorkhours } from "hooks";
import { useCallback, useState } from "react";
import { TWorkhoursFormData, workhoursSchema } from "schema/workhours.schema";
import { ZodFormattedError } from "zod";
import { Form } from "./styled";

export const AddHours = (): JSX.Element => {
  const today = new Date();

  const [errors, setErrors] = useState<ZodFormattedError<TWorkhoursFormData> | undefined>(undefined);
  const [workhoursData, setWorkhoursData] = useState<TWorkhoursFormData>({
    date: today,
    start: undefined,
    end: undefined,
  });

  const { createWorkhours } = useWorkhours();

  const handleSubmit = useCallback((): void => {
    const validation = workhoursSchema.safeParse(workhoursData);

    if (validation.success === false) {
      setErrors(validation.error.format());
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
  }, [createWorkhours, workhoursData]);

  const handleChange = useCallback((date: Date, name: string): void => {
    setWorkhoursData( (prev) => ( { ...prev, [name]: date } ) )
  }, []);

  return (
    <Form>
      <Text as="h3" size="lg" weight="bold">Add Hours</Text>
      <DatePicker
        error={errors?.date?._errors?.[0] && errors.date._errors[0]}
        format="MM/dd/yyyy"
        fullWidth
        handleChange={(selected: Date) => handleChange(selected, "date")}
        icon="calendar alternate outline"
        label="Date"
        name="date"
        value={workhoursData.date}
      />
      <DatePicker
        error={errors?.start?._errors?.[0] && errors.start._errors[0]}
        format="hh:mma"
        fullWidth
        handleChange={(selected: Date) => {
          const newDate = workhoursData.date.setHours(selected.getHours(), selected.getMinutes());
          handleChange(new Date(newDate), "start");
        }}
        icon="clock outline"
        label="Start Time"
        name="start"
        value={workhoursData.start}
      />
      <DatePicker
        error={errors?.end?._errors?.[0] && errors.end._errors[0]}
        format="hh:mma"
        fullWidth
        handleChange={(selected: Date) => {
          const newDate = workhoursData.date.setHours(selected.getHours(), selected.getMinutes());
          handleChange(new Date(newDate), "end");
        }}
        icon="clock outline"
        label="End Time"
        name="end"
        value={workhoursData.end}
      />
      <Button fullWidth handleClick={ handleSubmit } variant="primary">
        Add Hours
      </Button>
    </Form>
  );
};
