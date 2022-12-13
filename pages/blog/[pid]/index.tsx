import { NextPage } from "next";
import Image from "next/image";

import opec from "../../../public/opec.jpeg";
const Pid: NextPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-amber-300 border-black border-4 border-solid mt-5 relative w-[900px] h-96">
        <Image
          src={opec}
          width="800"
          height="500"
          alt="OPEC Building with people lined up in front of the entrance"
        />
      </div>
    </div>
  );
};

export default Pid;
