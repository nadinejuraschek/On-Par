import { z } from "zod";

export const goalSchema = z.object({
  dueDate: z.date({
    required_error: "Please select a date.",
  }),
  text: z.string({
    required_error: "Please define your goal.",
  }).min(1, {
    message: "Please define your goal.",
  }).trim(),
  type: z.string({
    required_error: "Please select a goal type.",
  }).min(1, {
    message: "Please select a goal type.",
  }),
});

export type TGoalFormData = z.infer<typeof goalSchema>;