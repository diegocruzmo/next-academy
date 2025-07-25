import { formSchema } from "@/app/(routes)/teacher/[courseId]/components/Course/ChaptersBlock/FormChapterName/FormChapterName.form";
import api from "@/lib/axios";
import { Chapter } from "@prisma/client";
import z from "zod";

export const createChapter = async (
  values: z.infer<typeof formSchema> & { courseId: string }
): Promise<{ data: Chapter }> => {
  try {
    const response = await api.post(
      `/api/course/${values.courseId}/chapter`,
      values
    );
    return {
      data: response.data,
    };
  } catch (error) {
    throw error;
  }
};
