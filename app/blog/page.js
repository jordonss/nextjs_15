import Link from "next/link";

export default function BlogPage({ params }) {
  return (
    <main>
      <h1>Blog</h1>
      <p>
        <Link href='/blog/post-1'>Post 1</Link>
      </p>
    </main>
  );
}
