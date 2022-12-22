import { NextPage } from "next";

export function getStaticProps() {
  return {
    props: {},
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

const Post: NextPage = () => {
  return <div className="flex justify-center py-6">page</div>;
};

export default Post;
