import { formSchema } from "@/app/(routes)/teacher/components/Header/FormCreateCourse/FormCreateCourse.form";
import api from "@/lib/axios";
import { Course } from "@prisma/client";
import z from "zod";

export const infoCourses = async (): Promise<{ data: Course[] }> => {
  try {
    const response = await api.get("/api/course");
    return {
      data: response.data,
    };
  } catch (error) {
    throw error;
  }
};

export const createCourse = async (
  values: z.infer<typeof formSchema>
): Promise<{ data: Course }> => {
  try {
    const response = await api.post("/api/course", values);
    return {
      data: response.data,
    };
  } catch (error) {
    throw error;
  }
};
