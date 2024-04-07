import React from "react";
import { Card } from "./ui/card";
import { FaHtml5, FaCss3, FaSass, FaReact } from "react-icons/fa6";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

export const Technologies = () => {
  const technologies = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "TAILWIND CSS", icon: SiTailwindcss },
    { name: "SASS", icon: FaSass },
    { name: "JAVASCRIPT", icon: SiJavascript },
    { name: "TYPESCRIPT", icon: SiTypescript },
    { name: "REACTJS", icon: FaReact },
    { name: "NEXTJS", icon: TbBrandNextjs },
    { name: "POSTGRESQL", icon: BiLogoPostgresql },
    { name: "PRISMA ORM", icon: SiPrisma },
  ];
  return (
    <Card className="p-10 rounded-3xl  mt-8 bg-gradient-to-b from-accent/40 to-card ">
      <h1 className="text-center text-4xl font-bold uppercase tracking-wide">Technologies</h1>
      <div className="flex justify-center items-center gap-8 mt-8 flex-wrap  ">
        {technologies.map((item) => (
          <div
            key={item.name}
            className="flex flex-col justify-center items-center gap-y-2"
          >
            {<item.icon className="text-4xl" />}
            <b>{item.name} </b>
          </div>
        ))}
      </div>
    </Card>
  );
};
