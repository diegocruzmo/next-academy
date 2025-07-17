import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Eye, EyeOff, MoveLeft, Trash } from "lucide-react";

import { HeaderCourseProps } from "./Header.types";

import useEditStateCourse from "@/hooks/useEditStateCourse";

export const HeaderCourse = ({ idCourse, isPublished }: HeaderCourseProps) => {
  const router = useRouter();
  const { mutateAsync: updateStateCourse, isPending } = useEditStateCourse();

  const handleEdit = async (state: boolean) => {
    await updateStateCourse({ id: idCourse, state });
    router.refresh();
  };

  return (
    <div className="m-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Button onClick={() => router.push(`/teacher`)}>
          <MoveLeft /> All Courses
        </Button>

        <div className="flex gap-2 items-center">
          {isPublished ? (
            <Button
              className="bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs px-2 py-1 rounded-md"
              onClick={() => handleEdit(false)}
              disabled={isPending}
            >
              <EyeOff /> Unpublish
            </Button>
          ) : (
            <Button
              className="bg-emerald-800 hover:bg-emerald-600 text-emerald-100 text-xs px-2 py-1 rounded-md"
              onClick={() => handleEdit(true)}
              disabled={isPending}
            >
              <Eye />
              Publish
            </Button>
          )}

          <Button
            onClick={() => console.log("Delete...")}
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
