import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4">
      <Link href={"/"} className="text-lg font-bold">
        <Image
          src="/logo.png"
          width={70}
          height={70}
          alt="Logo"
          className="inline-block"
        />
      </Link>
      <div className="flex flex-wrap gap-4">
        <Link href={"/projects"} className="text-lg font-bold">
          projects
        </Link>
        <Link href={"/login"} className="text-lg font-bold">
          login
        </Link>
      </div>
    </nav>
  );
}
