import { currentUser } from "@clerk/nextjs/server";
import { Courses, Header } from "./components";

export default async function TeacherPage() {
  const user = await currentUser();

  if (!user) return <div>not logged in</div>;

  return (
    <div>
      <Header />
      <Courses />
    </div>
  );
}
