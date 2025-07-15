import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <h2 className="text-2xl font-bold">Welcome to your Academy</h2>
      <h3 className="text-xl">Sign in to continue</h3>

      <SignIn />
    </div>
  );
};

export default SignInPage;
