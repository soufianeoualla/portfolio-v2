"use client";
import { deleteProject } from "@/actions/deleteProject";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useTransition,
} from "react";

interface DeleteModalProp {
  id: string;
  setDeleteModal: Dispatch<SetStateAction<boolean>>;
}

export const DeleteModal = ({ id, setDeleteModal }: DeleteModalProp) => {
  const [isPending, startTransition] = useTransition();
  const onDelete = () => {
    startTransition(() => {
    deleteProject(id)
    });
    setDeleteModal(false)
  };
  return (
    <>
      <div
        onClick={() => setDeleteModal(false)}
        className="fixed inset-0 w-full h-full bg-black/70 z-40"
      ></div>
      <div className="w-[480px] absolute top-[20%] left-1/2 -translate-x-1/2 translate-y-1/2  rounded-lg p-12 z-50 bg-card sm:w-[90%]">
        <h1 className="text-xl mb-2 font-bold -tracking-tighter text-white">
          Confirm Deletion
        </h1>
        <p className=" text-[13px] text-white/70">
          Are you sure you want to delete this project This action cannot be
          undone.
        </p>
        <div className="flex justify-end items-center mt-4 gap-x-2">
          <Button
          disabled={isPending}
            onClick={() => setDeleteModal(false)}
            variant={"ghost"}
            className="text-base pt-3 h-12 w-[89px] text-Subtle-Turquoise hover:bg-transparent font-bold rounded-3xl  dark:bg-Dusty-Aqua dark:text-white"
          >
            Cancel
          </Button>
          <Button
          disabled={isPending}
            onClick={onDelete}
            variant={"destructive"}
            className="text-base pt-3 rounded-3xl h-12 w-[89px] font-bold  text-white "
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};