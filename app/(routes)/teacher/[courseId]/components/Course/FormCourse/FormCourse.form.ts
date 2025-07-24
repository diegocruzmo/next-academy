import z from "zod";

export const formSchema = z.object({
  title: z.string().min(2).max(100),
  slug: z.string().min(2).max(100),
  description: z.string().min(2).max(200).optional().or(z.literal("")),
  category: z.string().min(2).max(100),
  level: z.string().min(2).max(100),
});
