"use client";

import { useState } from "react";

import { ListCheck, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import { TitleBlock } from "../TitleBlock";

import { ChaptersBlockProps } from "./ChaptersBlock.types";
import { FormChapterName } from "./FormChapterName";

export const ChaptersBlock = (props: ChaptersBlockProps) => {
  const { courseId, chapters } = props;

  const [chaptersList, setChaptersList] = useState(chapters || []);
  const [showInputChapter, setShowInputChapter] = useState(false);

  return (
    <div className="p-4 rounded-md h-fit border relative">
      <TitleBlock title="Course Chapters" icon={ListCheck} />

      <div className="flex gap-2 items-center justify-between mb-3">
        <p>All Chapters</p>

        <Button
          variant={"outline"}
          size={"sm"}
          disabled={showInputChapter}
          onClick={() => setShowInputChapter(true)}
        >
          <PlusCircle className="h-4 w-4" /> Create Chapter
        </Button>
      </div>

      {showInputChapter && (
        <FormChapterName
          setShowInputChapter={setShowInputChapter}
          courseId={courseId}
        />
      )}
    </div>
  );
};
