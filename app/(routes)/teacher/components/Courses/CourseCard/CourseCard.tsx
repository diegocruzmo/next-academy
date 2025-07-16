import { Course } from "@prisma/client";
import { ChartNoAxesColumn, DollarSign } from "lucide-react";
import Image from "next/image";
import { Actions } from "./Actions";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = (props: CourseCardProps) => {
  const { course } = props;
  const { id, title, price, level, imageUrl, description, isPublished } =
    course;
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <Image
            src={imageUrl || "/default-course-image.jpg"}
            alt={title}
            width={150}
            height={150}
            className="rounded-md max-w-52 m-auto"
          />
          <div>
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-xl font-medium">{title}</h2>
              {isPublished ? (
                <span className="inline-block bg-emerald-800 text-emerald-100 text-xs px-2 py-1 rounded-md">
                  Published
                </span>
              ) : (
                <span className="inline-block bg-slate-800 text-slate-100 text-xs px-2 py-1 rounded-md">
                  Not Published
                </span>
              )}
            </div>
            {description && (
              <p className="text-slate-600 dark:text-slate-400 w-full max-w-lg line-clamp-1 text-sm mt-1">
                {description}
              </p>
            )}

            <div className="flex flex-col gap-1 items-start">
              <div className="flex gap-1 items-center text-sm mt-2">
                <ChartNoAxesColumn className="w-4 h-4" />
                <span>Level: {price}</span>
                <span className="font-semibold">{level || "Beginner"}</span>
              </div>

              <div className="flex gap-1 items-center text-sm">
                <DollarSign className="w-4 h-4" />
                <span>Price: {price}</span>
                <span className="font-semibold">{price || 0}</span>
              </div>
            </div>
          </div>
        </div>

        <Actions courseId={id} />
      </div>
      <div className="border-t border-gray-600 w-full mt-3" />
    </div>
  );
};
