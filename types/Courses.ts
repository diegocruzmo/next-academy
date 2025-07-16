export type Course = {
  id: string;
  userId: string;
  title: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  price: number | null;
  isPublished: boolean;
  level: string | null;
  category: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Courses = Course[];
