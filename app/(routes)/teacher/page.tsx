import { currentUser } from "@clerk/nextjs/server";
import { Header } from "./components";
import prisma from "@/lib/prisma";

export default async function TeacherPage() {
  const user = await currentUser();

  const courses = await prisma.course.findMany({
    where: { userId: user?.id },
  });

  console.log(courses);

  if (!user) return <div>not logged in</div>;
  return (
    <div>
      <Header />
    </div>
  );
}
