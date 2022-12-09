import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import MailSvg from "../components/SVG/MailSvg";

const DynamicMailSVG = dynamic(
  new Promise((resolve) =>
    setTimeout(() => resolve(import("../components/SVG/MailSvg")), 0)
  ),
  {
    suspense: true,
  }
);

export default function About() {
  const [isClicked, setClicked] = useState(false);
  const handleBTN = () => {
    console.log("mail");
    setClicked((prev) => (prev = !prev));
  };
  return (
    <div>
      <div> about test</div>
      <button className="bg-amber-300 rounded-full" onClick={handleBTN}>
        Show Mail SVG
      </button>
      {isClicked ? (
        <Suspense fallback={`suspense....`}>
          <DynamicMailSVG />
        </Suspense>
      ) : // <DynamicMailSVG />
      null}
    </div>
  );
}
