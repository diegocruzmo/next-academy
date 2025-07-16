"use client";
import useInfoCourses from "@/hooks/useInfoCourses";

export const Courses = () => {
  const { courses, isPending } = useInfoCourses();

  if (isPending) return <div>Loading...</div>;

  console.log(courses);

  return <div>Courses</div>;
};
