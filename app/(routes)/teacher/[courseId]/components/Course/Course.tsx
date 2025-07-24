"use client";

import useGetInfoCourse from "@/hooks/useInfoCourse";
import { HeaderCourse } from "./HeaderCourse";
import { FormCourse } from "./FormCourse";

export const Course = ({ courseId }: { courseId: string }) => {
  const { course } = useGetInfoCourse(courseId);

  if (!course)
    return (
      <div className="flex items-center h-screen text-2xl justify-center">
        Course Not Found
      </div>
    );

  return (
    <div className="m-6">
      <HeaderCourse isPublished={course.isPublished} courseId={courseId} />
      <FormCourse course={course} />
    </div>
  );
};
