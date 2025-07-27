export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>Content for blog post with slug: {params.slug}</p>
    </main>
  );
}
