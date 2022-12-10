import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import opec from "../../../public/opec.jpeg";
const Pid: NextPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-amber-300 border-black border-4 border-solid mt-5 relative w-[900px] h-96">
        <Image src={opec} fill alt="opec" />
      </div>
    </div>
  );
};

export default Pid;
