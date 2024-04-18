"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { useState } from "react";

export const Header = () => {
  const [mobileMenu, setmobileMenu] = useState<boolean>(false);
  return (
    <header className="flex items-center justify-between h-24 sm:px-4">
      <div className="flex  gap-x-1 items-center">
        <Button onClick={() => setmobileMenu(true)} variant={"ghost"} size={'icon'}>
          <MenuIcon className="hidden sm:block" />
        </Button>
        <Link href={"/"} className="logo text-xl">
          SOUFIANECODE
        </Link>
      </div>
      <nav className="sm:hidden">
        <ul className="flex items-center gap-x-16 text-lg  text-bright-gray/70   ">
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
      {mobileMenu && (
        <div className="hidden sm:block">
          <MobileNav setmobileMenu={setmobileMenu} />
        </div>
      )}
      <Button asChild className="rounded-lg " size={"lg"}>
      <Link href="https://drive.google.com/file/d/1S3wUAKQGxB21ILVnNOTIclXzwf7NZNhp/view?usp=sharing" target="_blank" download>My Resume</Link>
      </Button>
    </header>
  );
};
