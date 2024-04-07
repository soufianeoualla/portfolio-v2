"use server";
import { auth } from "@/auth";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";

export const deleteProject = async (id: string) => {
  const session = await auth();
  const userId = session?.user?.id;

  const existingUser = await getUserById(userId as string);
  if (!existingUser) {
    return { error: "User not found" };
  }

  await db.stack.deleteMany({
    where: { projectId: id },
  });
  await db.project.delete({
    where: { id },
  });

  return { error: "Project successfully Deleted" };
};
