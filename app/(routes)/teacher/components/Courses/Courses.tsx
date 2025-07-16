"use client";
import useInfoCourses from "@/hooks/useInfoCourses";

export const Courses = () => {
  const { courses, isPending, error } = useInfoCourses();

  console.log(courses, isPending, error);

  return <div>Courses</div>;
};
