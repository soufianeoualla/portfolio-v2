"use server";
import { auth } from "@/auth";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";
import { ProjectSchema } from "@/schemas";
import { z } from "zod";
export const editProject = async (
  values: z.infer<typeof ProjectSchema>,
  stack: Array<string>,
  id: string
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

  await db.project.update({
    where: {
      id,
    },
    data: {
      github: github,
      image: image,
      LiveDemo: liveDemo,
      title: title,
    },
  });

  await db.stack.deleteMany({
    where: { projectId: id  },
  });

  await db.stack.createMany({
    data: stack.map((item) => ({
      projectId: id,
      name: item,
    })),
  });

  return { error: "Project successfully edited" };
};
