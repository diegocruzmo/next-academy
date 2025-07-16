type layoutProps = {
  children: React.ReactNode;
};

// const AuthLayout = ({ children }: { children: React.ReactNode }) => {
const AuthLayout = (props: layoutProps) => {
  const { children } = props;
  return (
    <div className="flex w-full h-screen items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
