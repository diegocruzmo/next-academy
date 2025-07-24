import { updateCourse } from "@/services/courses";
import { Course } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useEditCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (course: Partial<Course> & { id: string }) =>
      updateCourse(course),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-course"] });
    },
    onError: (error: Error) => {
      console.error("Error updating state:", error);
    },
  });
}

export default useEditCourse;
