"use client";

import useGetInfoCourse from "@/hooks/useInfoCourse";

export const Course = ({ courseId }: { courseId: string }) => {
  const { course } = useGetInfoCourse(courseId);

  if (!course)
    return (
      <div className="flex items-center h-screen text-2xl justify-center">
        Course Not Found
      </div>
    );

  console.log(course?.title);
  return <div>course</div>;
};
