import dynamic from "next/dynamic";
import React from "react";

const Banner = dynamic(() => import("../SVG/Banner"));

export default function Advertise() {
  return (
    <div className=" relative bg-slate-100 h-[134px] mb-4 border border-slate-300">
      <Banner />
    </div>
  );
}
