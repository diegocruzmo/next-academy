"use client";

import { useState } from "react";
import Image from "next/image";

import { FileImage, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { UploadButton } from "@/utils/uploadthing";

import { TitleBlock } from "../TitleBlock";
import { CourseImageProps } from "./CourseImage.types";
import useEditCourse from "@/hooks/useEditCourse";

export const CourseImage = ({ courseImage, courseId }: CourseImageProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(courseImage);

  const { mutateAsync: updateCourse } = useEditCourse();

  const onChangeImage = async (imageUrl: string) => {
    await updateCourse({ id: courseId, imageUrl: imageUrl });
  };

  return (
    <div className="p-4 rounded-md h-fit border border-slate-500">
      <TitleBlock title="Course Image" icon={FileImage} />

      {isEditing ? (
        <div className="bg-slate-500 p-4 mt-2 rounded-md">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              onChangeImage(res[0]?.ufsUrl);
              setImage(res[0]?.ufsUrl);
              setIsEditing(false);
            }}
            onUploadError={(error: Error) => {
              toast.error(error.message);
            }}
          />
        </div>
      ) : (
        <Image
          src={image || "/default-course-image.jpg"}
          alt="Course Image"
          width={500}
          height={500}
          className="rounded-md max-w-52 m-auto"
        />
      )}

      <Button
        className="w-full mt-4"
        variant={"outline"}
        size={"sm"}
        onClick={() => setIsEditing((isEditing) => !isEditing)}
      >
        <Pencil />
        Edit Image
      </Button>
    </div>
  );
};
