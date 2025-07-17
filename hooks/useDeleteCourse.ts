import { deleteCourse } from "@/services/courses";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useDeleteCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCourse(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-courses"] });
    },
    onError: (error) => {
      console.error("Error deleting course:", error);
    },
  });
}

export default useDeleteCourse;
