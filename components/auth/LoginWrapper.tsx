"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import { login } from "@/actions/login";
export const LoginWrapper = () => {
  const [isPending, startTransition] = useTransition();
  const [error, seterror] = useState<string | undefined>();
  const [success, setsuccess] = useState<string | undefined>();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values).then((data) => {
        seterror(data?.error);
        setsuccess(data?.success);
      });
    });
  };

  return (
    <Card className="w-[400px] rounded-lg">
      <CardHeader className="text-center">
        <CardTitle>SOUFIANECODE</CardTitle>
        <CardDescription>LOGIN</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="password"
                      placeholder="********"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <Button
                    size={"sm"}
                    asChild
                    variant={"link"}
                    className="px-0 font-normal focus:text-light-purple"
                  >
                    <Link href={"/auth/reset"}>Forgot password?</Link>
                  </Button>
                </FormItem>
              )}
            />
            <Button
              disabled={isPending}
              type="submit"
              size={"lg"}
              className="rounded-lg"
            >
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
