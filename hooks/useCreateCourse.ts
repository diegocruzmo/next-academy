import { formSchema } from "@/app/(routes)/teacher/components/Header/FormCreateCourse/FormCreateCourse.form";
import { createCourse } from "@/services/courses";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod";

function useCreateCourses() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => createCourse(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error) => {
      console.error("Error adding todo:", error);
    },
  });
}

export default useCreateCourses;
