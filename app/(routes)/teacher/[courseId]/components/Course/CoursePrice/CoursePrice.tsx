"use client";

import { DollarSign, Save } from "lucide-react";
import { TitleBlock } from "../TitleBlock";
import { CoursePriceProps } from "./CoursePrice.types";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import useEditCourse from "@/hooks/useEditCourse";
import { toast } from "sonner";

export const CoursePrice = (props: CoursePriceProps) => {
  const { coursePrice, courseId } = props;
  const [price, setPrice] = useState<string>(coursePrice?.toString() || "Free");

  const { mutateAsync: updateCourse } = useEditCourse();

  const onChangePrice = async () => {
    await updateCourse({ id: courseId, price: price });
    toast.success("Price updated successfully");
  };

  return (
    <div className="p-4 rounded-md h-fit border">
      <TitleBlock title="Course Price" icon={DollarSign} />

      <Select onValueChange={setPrice} defaultValue={price}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a price"></SelectValue>
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Course Price</SelectLabel>
            <SelectItem value="Free">Free</SelectItem>
            <SelectItem value="19,99">19,99</SelectItem>
            <SelectItem value="29,99">29,99</SelectItem>
            <SelectItem value="39,99">39,99</SelectItem>
            <SelectItem value="49,99">49,99</SelectItem>
            <SelectItem value="59,99">59,99</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button
        className="w-full mt-4"
        variant={"outline"}
        size={"sm"}
        onClick={onChangePrice}
        disabled={!price}
      >
        <Save />
        Save
      </Button>
    </div>
  );
};
