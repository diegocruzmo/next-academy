import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { infoCourses } from "@/services/courses";
import { Course } from "@prisma/client";

function useGetInfoCourses() {
  const { data, isPending, error }: UseQueryResult<{ data: Course[] }, Error> =
    useQuery({
      queryKey: ["courses"],
      queryFn: infoCourses,
    });

  const courses = data?.data ?? [];

  return { isPending, error, courses };
}

export default useGetInfoCourses;
