import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex items-center justify-between my-10">
      <Link href={"/"} className="text-2xl font-bold">Simple Blog</Link>
      <div>
        <Link href="/posts" className="cursor-pointer">
          Posts
        </Link>
      </div>
    </nav>
  );
};

export default Header;
