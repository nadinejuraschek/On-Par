import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({
    required_error: "An email address is required.",
  }).email({
    message: "Please enter a valid email address.",
  }).min(1, {
    message: "Please enter a valid email address.",
  }).trim().toLowerCase(),
  password: z.string({
    required_error: "Please enter your password.",
  }).min(6, {
    message: "Your password must be at least 6 characters long.",
  }).trim(),
});

export type TLoginFormData = z.infer<typeof loginSchema>;