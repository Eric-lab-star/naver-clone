import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Advertise() {
  return (
    <div className=" relative bg-slate-100 h-[134px] mb-4 border border-slate-300">
      <Link
        passHref
        legacyBehavior
        href="https://siape.veta.naver.com/fxclick?eu=EU10041889&calp=1&oj=A4YjrwVVtw9pt9XojcOhma1VkA3sP8xg7bsOwekZwJEXEc9GReOIN2mk3hkTxV5hJdAY203TD%2BgfMUK%2B%2FLOsZDiJUPiP4F0qu5zYyWFdSn%2FO8EAH1HZtkPVJwo5hKV6wctRzZMZGLy4VR%2FajLY2K1MStke8n59%2Bzwq%2BDrzLexRoneK2x9bP069f15xebddvkQ5sJneYKbTnbQ5BNZxN7Mq5tpDaG1i%2FQj5CJxJYlogo8jm%2BIx4wkJfDVoYO8Ng2DhnIhXgjKOZsVceJtbcsMqHvyXp5hMpcx&ac=8668301&src=6166222&br=4051045&evtcd=P901&x_ti=1308&tb=&oid=&sid1=&sid2=&rk=ec44674bd88ca06071c66cc2cbd44c68&eltts=RMecg6rsiuKO5XCy3aE0ZA%3D%3D&lu=&brs=Y&"
      >
        <MyButton />
      </Link>
    </div>
  );
}
//@ts-ignore
const MyButton = React.forwardRef(function Mybtn({ onClick, href }, ref) {
  return (
    <a href={href} onClick={onClick}>
      <Image
        src={
          "https://ssl.pstatic.net/melona/libs/1422/1422164/80e4bce83d95a8e26487_20221114185458628.jpg"
        }
        layout="fill"
        alt="advertisment"
      />
    </a>
  );
});
