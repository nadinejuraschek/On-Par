import { z } from "zod";

export const userSchema = z.object({
  email: z.string({
    required_error: "An email address is required.",
  }).email({
    message: "Please enter a valid email address.",
  }).trim().min(1, {
    message: "Please enter a valid email address.",
  }),
  password: z.string({
    required_error: "Please enter your password.",
  }).trim().min(6, {
    message: "Your password must be at least 6 characters long.",
  }),
});

export type TLoginFormData = z.infer<typeof userSchema>;