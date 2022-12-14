import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
const Blog: NextPage<{ blogPosts: { [key: string]: string }[] }> = ({
  blogPosts,
}) => {
  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map((post, index) => (
        <div key={index}>
          {post.title}
          <ul>
            <li>{post.category}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const blogPosts = readdirSync("./pages/posts").map((file) => {
    const content = readFileSync(`./pages/posts/${file}`, "utf-8");
    return matter(content).data;
  });
  console.log(blogPosts);

  return {
    props: {
      blogPosts,
    },
  };
}

export default Blog;
