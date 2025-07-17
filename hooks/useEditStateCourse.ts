import { updateStateCourse } from "@/services/courses";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useEditStateCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: { id: string; state: boolean }) =>
      updateStateCourse(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-course"] });
    },
    onError: (error: Error) => {
      console.error("Error updating state:", error);
    },
  });
}

export default useEditStateCourse;
