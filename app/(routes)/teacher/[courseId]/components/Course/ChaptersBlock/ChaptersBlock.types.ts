import { Chapter } from "@prisma/client";

export type ChaptersBlockProps = {
  courseId: string;
  chapters: Chapter[] | null;
};
