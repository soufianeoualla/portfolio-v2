"use server";

import { auth } from "@/auth";
import { getUserById } from "./user";
import { db } from "@/lib/db";

export const getProjects = async () => {
  const userId = process.env.USER_ID;

  const existingUser = await getUserById(userId as string);
  if (!existingUser) {
    return { error: "User not found" };
  }

  const projects = await db.project.findMany({
    where: {
      userId: userId,
    },
    include: { stack: true },
  });
  return projects;
};
