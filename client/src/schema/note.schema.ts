import { z } from "zod";

export const noteSchema = z.object({
  date: z.date(),
  title: z.string({
    required_error: "Your note must have a title.",
  }).min(1, {
    message: "Your note must have a title.",
  }).trim(),
  text: z.string({
    required_error: "Your note can not be empty.",
  }).min(1, {
    message: "Your note can not be empty.",
  }).trim(),
});

export type TNoteFormData = z.infer<typeof noteSchema>;