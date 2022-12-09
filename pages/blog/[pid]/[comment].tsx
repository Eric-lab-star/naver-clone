import { NextPage } from "next";
import { useRouter } from "next/router";

const Comment: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>page</div>;
};

export default Comment;
