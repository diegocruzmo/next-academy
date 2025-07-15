type layoutProps = {
  children: React.ReactNode;
};

// const AuthLayout = ({ children }: { children: React.ReactNode }) => {
const AuthLayout = (props: layoutProps) => {
  const { children } = props;
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-sky-200 to-sky-300 z-[-1]" />
      {children}
    </div>
  );
};

export default AuthLayout;
