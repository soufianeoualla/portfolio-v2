"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormSchema } from "@/schemas";
import emailjs from "@emailjs/browser";
import { MutableRefObject, SetStateAction, useRef, useState, useTransition } from "react";
import { CheckCheckIcon, TriangleAlertIcon } from "lucide-react";
export const ContactFrom = () => {
  const [error, seterror] = useState<string>("");
  const [success, setsuccess] = useState<string>("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });
  const contactForm: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const[isPending,startTransition]=useTransition()
  
  const sendEmail = async () => {
    if (!contactForm.current) {
      return;
    }
    try {
      await emailjs.sendForm(
        "service_jsumuec",
        "template_2lkxz3y",
        contactForm.current!,
        "2oeWgya5j2EmOAAtY"
      );
      setsuccess("Your email is successfully sent");
      seterror("");
      console.log("sent");
    } catch (error) {
      seterror("Error sending email");
      setsuccess("");

      console.log(error);
    }

    form.reset();
  };
  const onSubmit = ()=>{
    startTransition(()=>{
      sendEmail()
    })
  }

  return (
    <Form {...form}>
      <form
        ref={contactForm}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 "
      >
        <FormField
          control={form.control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input disabled={isPending} placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="user_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input disabled={isPending} placeholder="mail@soufian.me" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea disabled={isPending} placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          {error && (
            <div className="py-4 px-4 bg-destructive/10 text-destructive flex items-center gap-x-2 rounded-lg">
              <TriangleAlertIcon />
              {error}
            </div>
          )}
          {success && (
            <div className="py-4 px-4 bg-emerald-500/10 text-emerald-500 flex items-center gap-x-2 rounded-lg">
              <CheckCheckIcon />
              {success}
            </div>
          )}

          <Button disabled={isPending} className="mt-4" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
