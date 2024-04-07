import Link from "next/link";
import { Card } from "./ui/card";
import { FaLinkedin, FaSquareGithub,FaCode,FaArrowUpLong } from "react-icons/fa6";


export const Contact = () => {
  return (
    <div className="mt-10 grid grid-cols-[1fr,2.7fr,1fr] gap-x-8 md:grid-cols-1 md:gap-y-8 sm:grid-cols-1 ">
      <Card className="rounded-3xl p-8 flex flex-col   justify-center bg-gradient-to-br from-accent/40 to-card ">
        <FaLinkedin className="w-full h-full" />

        <div className="flex items-center justify-between">
          <div className="grid gap-y-1 px-1 ">
            <span className="uppercase tracking-wide">Profile</span>
            <b className="text-2xl tracking-wider">LinkedIn</b>
          </div>

          <Link
            href={"https://www.linkedin.com/in/soufianeoualla/"}
            target="_blank"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary-foreground "
          >
            <FaArrowUpLong className="text-dark rotate-45 hover:text-white" />{" "}
          </Link>
        </div>
      </Card>
      <Card className="rounded-3xl p-8 flex flex-col items-start justify-end bg-gradient-to-t from-accent/40 to-card sm:px-4 ">
        <FaCode className="text-6xl text-[#7b5cfa]/80 mb-8"/>
        <h1 className="text-7xl md:text-5xl sm:text-3xl font-bold">Let&apos;s <br /> Work <span className="text-[#7b5cfa]/80">Together.</span></h1>
      </Card>
      <Card className="rounded-3xl p-8 flex flex-col  justify-center bg-gradient-to-br from-accent/40 to-card">
        <FaSquareGithub className="w-full h-full" />

        <div className="flex items-center justify-between">
          <div className="grid gap-y-1 px-1">
            <span className="uppercase tracking-wide">Profile</span>
            <b className="text-2xl tracking-wider">Github</b>
          </div>
          <Link
            href={"https://github.com/soufianeoualla"}
            target="_blank"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary-foreground "
          >
            <FaArrowUpLong className="text-dark rotate-45 hover:text-white" />{" "}
          </Link>
        </div>
      </Card>
    </div>
  );
};
