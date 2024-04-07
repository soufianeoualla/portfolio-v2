import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface mobileNabProp {
  setmobileMenu: Dispatch<SetStateAction<boolean>>;
}

export const MobileNav = ({ setmobileMenu }: mobileNabProp) => {
  return (
    <>
      <div
        onClick={() => setmobileMenu(false)}
        className="fixed h-full w-screen top-0 bg-black/70 z-10"
      ></div>
      <nav className="fixed top-0 left-0 w-[70vw] bg-card h-full flex justify-center items-center z-20">
        <ul className="flex items-center gap-x-16 text-lg  text-bright-gray/70 flex-col justify-center gap-y-8 text-left  ">
          <li className="hover:text-white">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/work"}>Work</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/contact"}>Conatct</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
