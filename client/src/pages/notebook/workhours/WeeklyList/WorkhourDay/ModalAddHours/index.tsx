import { Modal } from "components";
import { useCallback, useMemo, useState } from "react";
import { TWorkhoursFormData } from "schema/workhours.schema";
import { ZodFormattedError } from "zod";
import { ModalBody } from "./styled";
import { IModalAddHours } from "./types";
import { StyledDatePicker } from "../styled";

export const ModalAddHours = ({ day, handleClose }: IModalAddHours): JSX.Element => {
  const today = new Date();

  const [errors, setErrors] = useState<ZodFormattedError<TWorkhoursFormData> | undefined>(undefined);
  const [workhoursData, setWorkhoursData] = useState<TWorkhoursFormData>({
    date: today,
    start: undefined,
    end: undefined,
  });

  console.log("LOG: ", { workhoursData, setErrors })

  const handleChange = useCallback((date: Date, name: string) => {
    setWorkhoursData( (prev) => ( { ...prev, [name]: date } ) );
  }, []);

  const renderModalActions = useMemo(() => [], []);

  return (
    <Modal actions={renderModalActions} handleClose={handleClose} title="Add Workhours">
      <ModalBody>
        <StyledDatePicker
          disabled={true}
          format="MM/dd/yyyy"
          fullWidth
          handleChange={() => {}}
          icon="calendar"
          label="Date"
          name="date"
          value={day.toDate()}
        />
        <StyledDatePicker
          error={errors?.start?._errors?.[0] && errors.start._errors[0]}
          format="hh:mma"
          fullWidth
          handleChange={(selected: Date) => {
            const newDate = day.toDate().setHours(selected.getHours(), selected.getMinutes());
            handleChange(new Date(newDate), "start");
          }}
          icon="clock"
          label="Start time"
          name="start"
          value={day.toDate()}
        />
        <StyledDatePicker
          error={errors?.end?._errors?.[0] && errors.end._errors[0]}
          format="hh:mma"
          handleChange={(selected: Date) => {
            const newDate = day.toDate().setHours(selected.getHours(), selected.getMinutes());
            handleChange(new Date(newDate), "end");
          }}
          icon="clock"
          label="End time"
          name="end"
          value={day.toDate()}
        />
      </ModalBody>
    </Modal>
  );
}