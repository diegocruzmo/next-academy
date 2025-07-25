import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-4 px-6 border-t w-full">
      <div className="flex justify-between items-center text-sm">
        <p>2025@Academy</p>

        <div className="flex gap-4 items-center ml-6">
          <Link href={"/privacy-policy"} className={"hover:underline"}>
            Privacy Policy
          </Link>
          <Link href={"/terms-and-conditions"} className={"hover:underline"}>
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};
