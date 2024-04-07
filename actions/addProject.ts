"use server";
import { auth } from "@/auth";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";
import { ProjectSchema } from "@/schemas";
import { z } from "zod";
import { v4 as uuid } from "uuid";

export const addProject = async (
  values: z.infer<typeof ProjectSchema>,
  stack: Array<string>
) => {
  const session = await auth();
  const userId = session?.user?.id;

  const existingUser = await getUserById(userId as string);
  if (!existingUser) {
    return { error: "User not found" };
  }
  const validateFields = ProjectSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalidate fields" };
  }
  const { github, image, liveDemo, title } = validateFields.data;
  const projectId = uuid();

  await db.project.create({
    data: {
      userId: userId,
      id: projectId,
      github: github,
      image: image,
      LiveDemo: liveDemo,
      title: title,
    },
  });
  await db.stack.createMany({
    data: stack.map((item) => ({
      projectId: projectId,
      name: item,
    })),
  });

  return { error: "Project successfully Added" };
};
