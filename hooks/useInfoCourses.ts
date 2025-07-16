//import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { infoCourses } from "@/services/courses";
//import { Courses } from "@/types/Courses";

function useGetInfoCourses() {
  const { data, isPending, error } = useQuery({
    queryKey: ["courses"],
    queryFn: infoCourses,
  });

  const courses = data ?? [];

  return { isPending, error, courses };
}

export default useGetInfoCourses;
