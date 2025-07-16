import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid justify-center items-center h-screen">
      <div>
        <h2 className="text-2xl font-bold">Page not found - 404</h2>
        <Link
          href="/"
          className="text-xl mt-2 hover:underline block text-center"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
