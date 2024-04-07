import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is Required",
  }),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});
export const ForgotPsswordSchema = z.object({
  email: z.string().email({
    message: "Email is Required",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "Full Name is Required",
  }),
  email: z.string().email({
    message: "Email is Required",
  }),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});

export const FormSchema = z.object({
  user_name: z.string().min(3, {
    message: "Full Name is Required",
  }),
  user_email: z.string().email({
    message: "Email is Required",
  }),
  message: z.string().min(6, {
    message: "Message is required",
  }),
});

export const ProjectSchema = z.object({
  title: z.string().min(3, {
    message: "name is Required",
  }),
  github: z.string().min(6, {
    message: "github link is Required",
  }),
  liveDemo: z.string().min(6, {
    message: "live demo link is required",
  }),
  image: z.string().min(6, {
    message: "image is required",
  }),
});
