import Link from "next/link";
import React from "react";
import cls from "../../utils/cls";

const NavBarItem = function NavbarItem({
  value,
  index,
}: {
  value: string;
  index: number;
}) {
  return (
    <Link href={`/${value}`} legacyBehavior>
      <a
        className={cls(
          "font-bold",
          index <= 7 ? "text-green-500" : "text-slate-800"
        )}
      >
        {value}
      </a>
    </Link>
  );
};

export default NavBarItem;
