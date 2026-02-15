import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <h2 className="text-3xl">404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="underline p-2 rounded-md text-red-500 border border-red-500"
      >
        Return Home
      </Link>
    </div>
  );
}
