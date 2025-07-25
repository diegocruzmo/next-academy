"use client";

import useGetInfoCourse from "@/hooks/useInfoCourse";
import { HeaderCourse } from "./HeaderCourse";
import { FormCourse } from "./FormCourse";
import { CourseImage } from "./CourseImage";
import { CoursePrice } from "./CoursePrice";
import { ChaptersBlock } from "./ChaptersBlock";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <CourseImage courseId={courseId} courseImage={course.imageUrl} />
        <CoursePrice courseId={courseId} coursePrice={course.price} />
      </div>

      <div>
        <ChaptersBlock courseId={courseId} chapters={course.chapters} />
      </div>
    </div>
  );
};
