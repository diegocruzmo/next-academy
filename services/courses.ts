import { formSchema } from "@/app/(routes)/teacher/components/Header/FormCreateCourse/FormCreateCourse.form";
import api from "@/lib/axios";
import { Chapter, Course } from "@prisma/client";
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

export const infoCourse = async (
  id: string
): Promise<{
  data: Course & {
    chapters: Chapter[];
  };
}> => {
  try {
    const response = await api.get(`/api/course/${id}`);
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

export const deleteCourse = async (id: string) => {
  try {
    const response = await api.delete(`/api/course/${id}`);
    return {
      data: response.data,
    };
  } catch (error) {
    throw error;
  }
};

export const updateCourse = async (
  course: Partial<Course> & { id: string }
) => {
  try {
    const { id, ...fieldsToUpdate } = course;
    const response = await api.patch(`/api/course/${id}`, fieldsToUpdate);
    return { data: response.data };
  } catch (error) {
    throw error;
  }
};
