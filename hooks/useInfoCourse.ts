import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { infoCourse } from "@/services/courses";
import { Course } from "@prisma/client";

function useGetInfoCourse(id: string) {
  const { data, isPending, error }: UseQueryResult<{ data: Course }, Error> =
    useQuery({
      queryKey: ["get-course", id],
      queryFn: () => infoCourse(id),
    });

  const course = data?.data;

  return { isPending, error, course };
}

export default useGetInfoCourse;
