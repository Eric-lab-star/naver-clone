import { NextPage } from "next";
import { useRouter } from "next/router";

const Slug: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router.query);
  return <div> i am blog page {slug}</div>;
};

export default Slug;
