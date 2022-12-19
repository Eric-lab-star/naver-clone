import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
const Blog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogPosts,
}) => {
  return (
    <div>
      <h1 className="text-center text-3xl border-b-2 py-4 mb-4">Blog</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="px-24 my-2">
          <div className="text-2xl font-bold">{post.title}</div>
          <ul>
            <li>Category: {post.category}</li>
            <li>Date: {post.date.slice(0, 10)}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps(): Promise<{
  props: { blogPosts: { title: string; date: string; category: string }[] };
}> {
  const blogPosts = readdirSync("./pages/posts").map((file) => {
    const content = readFileSync(`./pages/posts/${file}`, "utf-8");
    const { data } = matter(content);

    return JSON.parse(JSON.stringify(data));
  });
  return {
    props: {
      blogPosts,
    },
  };
}

export default Blog;
