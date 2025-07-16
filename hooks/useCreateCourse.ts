import { createCourse } from "@/services/courses";
import { CreateCourse } from "@/types/Courses";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useCreateCourses() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: CreateCourse) => createCourse(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error) => {
      console.error("Error adding todo:", error);
    },
  });
}

export default useCreateCourses;
