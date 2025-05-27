import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.This is a test PR {" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
