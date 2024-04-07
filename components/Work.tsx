import Image from "next/image";
import { Button } from "./ui/button";
import { FaArrowUpLong } from "react-icons/fa6";
import project_img from "@/public/kanban.webp";
import { Card } from "./ui/card";
export const Work = () => {
  return (
    <Card className="p-10 bg-gradient-to-bl from-accent/40 to-card rounded-3xl">
      <div className="mb-10">
        <Image src={project_img} alt={""} className="rounded-tr-3xl rounded-bl-3xl w-2/3 mx-auto"  />
      </div>
      <div className="flex items-center justify-between">
        <div className="grid gap-y-1 uppercase">
          <span className="">Showcase</span>
          <b className="text-xl">Projects</b>
        </div>
        <Button className="rounded-full w-10 h-10">
        <FaArrowUpLong className="text-xl rotate-45"/>
        </Button>
      </div>
    </Card>
  );
};
