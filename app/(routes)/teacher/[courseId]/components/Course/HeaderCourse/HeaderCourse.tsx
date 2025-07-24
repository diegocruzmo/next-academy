import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Eye, EyeOff, MoveLeft, Trash } from "lucide-react";

import { HeaderCourseProps } from "./Header.types";

import useEditCourse from "@/hooks/useEditCourse";
import useDeleteCourse from "@/hooks/useDeleteCourse";
import { toast } from "sonner";

export const HeaderCourse = ({ isPublished, courseId }: HeaderCourseProps) => {
  const router = useRouter();
  const { mutateAsync: updateCourse, isPending } = useEditCourse();
  const { mutateAsync: deleteCourse } = useDeleteCourse();

  const handleEdit = async (isPublished: boolean) => {
    const course = {
      id: courseId,
      isPublished,
    };
    await updateCourse(course);
    router.refresh();
  };

  const handleDelete = async () => {
    await deleteCourse(courseId);
    toast.success("Course deleted successfully");
    router.push(`/teacher`);
  };

  return (
    <div className="m-4">
      <div className="flex flex-row justify-between items-center">
        <Button className="mb-2" onClick={() => router.push(`/teacher`)}>
          <MoveLeft /> All Courses
        </Button>

        <div className="flex gap-2 items-center">
          {isPublished ? (
            <Button
              className="bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs px-2 py-1 rounded-md"
              onClick={() => handleEdit(!isPublished)}
              disabled={isPending}
            >
              <EyeOff /> Unpublish
            </Button>
          ) : (
            <Button
              className="bg-emerald-800 hover:bg-emerald-600 text-emerald-100 text-xs px-2 py-1 rounded-md"
              onClick={() => handleEdit(!isPublished)}
              disabled={isPending}
            >
              <Eye />
              Publish
            </Button>
          )}

          <Button
            onClick={handleDelete}
            variant={"destructive"}
            disabled={isPending}
          >
            <Trash />
          </Button>
        </div>
      </div>
    </div>
  );
};
