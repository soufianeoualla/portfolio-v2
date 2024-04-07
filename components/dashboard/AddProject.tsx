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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { IoChevronDown } from "react-icons/io5";
import { ProjectSchema } from "@/schemas";
import { Card, CardContent } from "../ui/card";
import { Dispatch, SetStateAction, useState, useTransition } from "react";
import { addProject } from "@/actions/addProject";
import { singleProject } from "@/data/interface";
import { editProject } from "@/actions/editProject";

interface addProps {
  setaddEditModal: Dispatch<SetStateAction<string | null>>;
  edit: boolean;
  project: singleProject | undefined;
}

export const AddProject = ({ setaddEditModal, edit, project }: addProps) => {
  const Stack = [
    "HTML",
    "CSS",
    "TAILWIND CSS",
    "SASS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "REACTJS",
    "NEXTJS",
    "POSTGRESQL",
    "PRISMA ORM",
  ];

  const selectedStack = project?.stack.flatMap((item) => item.name);

  const [checked, setChecked] = useState<Array<string> | undefined>(
    edit ? selectedStack : ["CSS", "JAVASCRIPT", "REACTJS"]
  );
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      title: edit ? project?.title : "",
      image: edit ? project?.image : "",
      github: edit ? project?.github : "",
      liveDemo: edit ? project?.LiveDemo : "",
    },
  });
  const handleChecked = (item: string) => {
    if (!checked) return;
    if (checked.includes(item)) {
      return setChecked(checked.filter((filter) => filter !== item));
    }
    setChecked((prev) => [...prev!, item]);
  };

  const onAdd = (values: z.infer<typeof ProjectSchema>) => {
    if (!checked) return;
    if (checked.length < 0) return;
    startTransition(() => {
      edit
        ? editProject(values, checked, project?.id!)
        : addProject(values, checked);
    });
    setaddEditModal(null);
  };

  return (
    <>
      <div
        onClick={() => setaddEditModal(null)}
        className="fixed h-full w-full bg-black/70 z-10"
      ></div>
      <Card className="w-[500px] absolute  z-20 pt-5">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onAdd)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        placeholder="Project Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>image Link</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid items-center grid-cols-2 gap-x-4 ">
                <FormField
                  control={form.control}
                  name="github"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Github Repo</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          placeholder="Github Repo"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="liveDemo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Live Demo</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          placeholder="Live Demo"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size={"lg"} className="w-[215px]">
                    <div className="flex justify-between items-center text-dark ">
                      <b className="">Select Stack</b>
                      <IoChevronDown className="ml-4 text-dark" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[215px] p-0  space-y-1   ">
                  {Stack.map((item, index) => (
                    <DropdownMenuCheckboxItem
                      className="capitalize py-2 "
                      onClick={() => handleChecked(item)}
                      key={index}
                      checked={checked!.includes(item)}
                    >
                      {item}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                disabled={isPending}
                className="flex justify-center w-full"
                type="submit"
              >
                {edit ? "Edit Project" : "Add Project"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};
