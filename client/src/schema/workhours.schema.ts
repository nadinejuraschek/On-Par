import { z } from "zod";

export const workhoursSchema = z.object({
  date: z.date({
    required_error: "Please select a date.",
    invalid_type_error: "Please select a date.",
  }),
  start: z.date({
    required_error: "Please select a start time.",
    invalid_type_error: "Please select a start time.",
  }),
  end: z.date({
    required_error: "Please select an end time.",
    invalid_type_error: "Please select an end time.",
  }),
});

export type TWorkhoursFormData = z.infer<typeof workhoursSchema>;