"use client";

import { Edit, Trash } from "lucide-react";
import { ActionsProps } from "./Actions.types";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

export const Actions = (props: ActionsProps) => {
  const { courseId } = props;
  console.log(courseId);
  return (
    <div className="flex flex-col gap-2 items-center w-full lg:max-w-42">
      <Button className="w-full" variant={"outline"} size={"sm"}>
        Edit <Edit className="w-4 h-4" />
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="w-full" variant={"destructive"} size={"sm"}>
            Delete <Trash className="w-4 h-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              course and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
