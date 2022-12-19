import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
const Blog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogPosts,
}) => {
  return (
    <div>
      <h1 className="text-center text-3xl border-b-2 py-4 mb-4">Blog</h1>
      {blogPosts.map((post, index) => (
        <Link
          key={index}
          href={`blog/${post.slug}`}
          className="hover:underline hover:text-amber-500 "
        >
          <div className="px-24 my-2">
            <div className="text-2xl font-bold">{post.title}</div>
            <ul>
              <li>Category: {post.category}</li>
              <li>Date: {post.date.slice(0, 10)}</li>
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps(): Promise<{
  props: {
    blogPosts: {
      title: string;
      date: string;
      category: string;
      slug: string;
    }[];
  };
}> {
  const blogPosts = readdirSync("./pages/posts").map((file) => {
    const content = readFileSync(`./pages/posts/${file}`, "utf-8");
    const { data } = matter(content);
    const [slug, md] = file.split(".");
    return { ...JSON.parse(JSON.stringify(data)), slug };
  });
  return {
    props: {
      blogPosts,
    },
  };
}

export default Blog;
