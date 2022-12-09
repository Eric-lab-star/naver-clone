import { NextPage } from "next";
import { useRouter } from "next/router";

const Pid: NextPage = () => {
  console.log(useRouter().query);
  return <div>pid</div>;
};

export default Pid;
