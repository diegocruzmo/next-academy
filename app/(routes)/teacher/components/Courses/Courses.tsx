"use client";

import useInfoCourses from "@/hooks/useInfoCourses";
import { CourseCard } from "./CourseCard";
import { SkeletonCard } from "@/components/Shared";

export const Courses = () => {
  const { courses, isPending } = useInfoCourses();

  if (isPending) return <SkeletonCard count={3} />;
  if (courses.length === 0) return <div>Not Courses Found</div>;

  return (
    <div className="flex flex-col my-4 mx-6 border rounded-md p-4 gap-10">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
