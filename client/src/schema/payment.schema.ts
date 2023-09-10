import { z } from "zod";

export const paymentSchema = z.object({
  _id: z.string(),
  amount: z.number({
    required_error: "Please enter the payment amount.",
  }),
  date: z.date({
    required_error: "Please select a date.",
    invalid_type_error: "Please select a date.",
  }),
  late: z.boolean(),
  paid: z.boolean(),
  week: z.number(),
});

export type TPaymentFormData = z.infer<typeof paymentSchema>;