import { auth } from "@clerk/nextjs/server";
import { Course } from "./components";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const { userId } = await auth();

  if (!userId) return <div>You do not have access, please sign in</div>;

  return (
    <div>
      <Course courseId={courseId} />
    </div>
  );
}
