"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { FormChapterNameProps } from "./FormChapterName.types";
import { formSchema } from "./FormChapterName.form";
import { BookCheck } from "lucide-react";

export const FormChapterName = (props: FormChapterNameProps) => {
  const { courseId, setShowInputChapter } = props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setShowInputChapter(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ex: Basic HTML" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={"outline"}
          size={"sm"}
          type="submit"
          disabled={!form.formState.isValid}
        >
          <BookCheck className="h-4 w-4" />
          Create
        </Button>
      </form>
    </Form>
  );
};
