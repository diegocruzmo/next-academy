import { Chapter, Course } from "@prisma/client";

export type FormCourseProps = {
  course: CourseWithRelations;
};

//type CourseWithRelations = Course & { chapters: Chapter[] };
type CourseWithRelations = Course;
