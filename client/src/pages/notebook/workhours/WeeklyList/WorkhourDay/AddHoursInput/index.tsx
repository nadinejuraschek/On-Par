import { useCallback, useState } from "react";
import { TWorkhoursFormData } from "schema/workhours.schema";
import { ZodFormattedError } from "zod";
import { IAddHoursInput } from "./types";
import { StyledDatePicker } from "../styled";

export const AddHoursInput = ({ day }: IAddHoursInput): JSX.Element => {
  const today = new Date();

  const [errors, setErrors] = useState<ZodFormattedError<TWorkhoursFormData> | undefined>(undefined);
  const [workhoursData, setWorkhoursData] = useState<TWorkhoursFormData>({
    date: today,
    start: undefined,
    end: undefined,
  });

  console.log(workhoursData, setErrors)

  const handleChange = useCallback((date: Date, name: string) => {
    setWorkhoursData( (prev) => ( { ...prev, [name]: date } ) );
  }, []);

  return (
    <>
      <StyledDatePicker
        error={errors?.start?._errors?.[0] && errors.start._errors[0]}
        format="hh:mma"
        handleChange={(selected: Date) => {
          const newDate = day.toDate().setHours(selected.getHours(), selected.getMinutes());
          handleChange(new Date(newDate), "start");
        }}
        name="start"
        value={day.toDate()}
      />
      <span>&mdash;</span>
      <StyledDatePicker
        error={errors?.end?._errors?.[0] && errors.end._errors[0]}
        format="hh:mma"
        handleChange={(selected: Date) => {
          const newDate = day.toDate().setHours(selected.getHours(), selected.getMinutes());
          handleChange(new Date(newDate), "end");
        }}
        name="end"
        value={day.toDate()}
      />
    </>
  );
}