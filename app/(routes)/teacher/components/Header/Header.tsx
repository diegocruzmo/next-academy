import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { FormCreateCourse } from "./FormCreateCourse";

export const Header = () => {
  return (
    <div className="my-4 mx-6 border rounded-md ">
      <div className="flex justify-between items-center my-4 mx-6">
        <h2 className="text-xl">Teacher Dashboard</h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"secondary"}>
              New Course <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Course</DialogTitle>
              <FormCreateCourse />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
