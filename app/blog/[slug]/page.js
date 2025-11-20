import fs from "fs";
import path from "path";
import BlogClient from "./BlogClient";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "public", "posts");
  const files = fs.readdirSync(postsDir);

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export default async function BlogPostPage({ params }) {
  const filePath = path.join(process.cwd(), "public", "posts", `${params.slug}.md`);
  const markdown = fs.readFileSync(filePath, "utf8");

  return <BlogClient slug={params.slug} markdown={markdown} />;
}
