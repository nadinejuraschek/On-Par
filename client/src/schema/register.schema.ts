// import * as dayjs from "dayjs";
import { z } from "zod";

// const minAge = dayjs().subtract(18, "year").toDate();
// const maxAge = dayjs().subtract(26, "year").toDate();

export const registerSchema = z.object({
  firstname: z.string({
    required_error: "A firstname is required.",
  }).min(2, {
    message: "The name must be at least 2 characters long.",
  }).trim().toLowerCase(),
  lastname: z.string({
    required_error: "A lastname is required.",
  }).min(2, {
    message: "The name must be at least 2 characters long.",
  }).trim().toLowerCase(),
  startDate: z.date({
    required_error: "Please select a date and time",
  }),/*.min(minAge, {    message: "You must be at least 18 years old.",
  }).max(maxAge, {
    message: "You must not be more than 26 years old.",
  })*/
  country: z.object({
    label: z.string(),
    value: z.string().min(1,  {
      message: "Please select a country.",
    }),
  }),
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
  }).max(30, {
    message: "Your password can not be longer than 30 characters.",
  }).trim(),
  // role: z.string().trim().min(1, { message: "Please select an option." }),
  // familyID: z.string().trim().length(6, { message: "Please enter a valid family ID." }),
});

export type TRegisterFormData = z.infer<typeof registerSchema>;