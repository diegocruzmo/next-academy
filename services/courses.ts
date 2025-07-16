import api from "@/lib/axios";
// import { InfoCategories } from "@/types/Categories";

// export const infoCategories = async (): Promise<InfoCategories> => {
/*
export const infoCourses = async () => {
  try {
    const response = await api.get("/api/courses");
    return {
      data: response,
    };
  } catch (error) {
    throw error;
  }
};
*/

export const createCourse = async (data: any) => {
  try {
    const response = await api.post("/api/courses", data);
    return {
      data: response,
    };
  } catch (error) {
    throw error;
  }
};
