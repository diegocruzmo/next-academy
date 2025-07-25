import { formSchema } from "@/app/(routes)/teacher/[courseId]/components/Course/ChaptersBlock/FormChapterName/FormChapterName.form";
import { createChapter } from "@/services/chapters";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod";

function useCreateChapter() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (chapter: z.infer<typeof formSchema> & { courseId: string }) =>
      createChapter(chapter),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["get-course", variables.courseId],
      });
    },
    onError: (error: Error) => {
      console.error("Error updating state:", error);
    },
  });
}

export default useCreateChapter;
