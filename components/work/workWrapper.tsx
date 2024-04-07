"use client";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { getProjects } from "@/data/projects";
import { singleProject } from "@/data/interface";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const WorkWrapper = () => {
  const [slide, setSlide] = useState<number>(0);
  const [projects, setprojects] = useState<singleProject[] | undefined>();
  useEffect(() => {
    const getData = async () => {
      const response = await getProjects();
      setprojects(response as any);
    };
    getData();
  }, []);
  if (!projects)
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Loading />
      </div>
    );

  return (
    <>
    <div className="mt-20 mb-20 flex justify-center items-center flex-wrap relative ">
      
      {projects.map((item, index) => (
        <Card
          key={item.id}
          className={`rounded-lg grid w-[400px]    ${
            slide === index ? "" : "hidden"
          } `}
        >
          <Image
            className="rounded-lg  "
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
          />
          <div className="px-4 py-8">
            <h1 className="text-3xl font-bold uppercase ">{item.title} </h1>
            <div className="flex items-center flex-wrap gap-3">
              {item.stack.map((item) => (
                <span
                  key={item.id}
                  className="text-white/70 text-xl bg-accent px-1 pt-1 rounded-md"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full flex items-center gap-x-2 pb-8 px-4">
            <Button asChild className="w-full" variant={"secondary"}>
              <Link target="_blank" href={item.github}>View Code</Link>
            </Button>
            <Button asChild className="w-full">
              <Link target="_blank" href={item.LiveDemo}>Live Demo</Link>
            </Button>
          </div>
        </Card>
      ))}
      <Button
        onClick={() => setSlide((prev) => (prev + 1) % projects.length)}
        variant={"default"}
        size={"icon"}
        className="w-12 h-12 rounded-full absolute right-0 sm:right-3 sm:bg-dark/70 sm:text-white  sm:top-1/4 sm:focus:bg-dark/70"
      >
        <FaChevronRight />
      </Button>
      <Button
        onClick={() =>
          setSlide((prev) => (prev - 1 + projects.length) % projects.length)
        }
        variant={"default"}
        size={"icon"}
        className="w-12 h-12 rounded-full absolute left-0 sm:left-3 sm:bg-dark/70 sm:text-white  sm:top-1/4 sm:focus:bg-dark/70"
      >
        <FaChevronLeft />
      </Button>

      
    </div>
    <div className="flex justify-center items-center gap-x-1">
        {projects.map((item,index)=>(
          <div key={item.id} className={`h-2 rounded-lg ${slide === index ? 'w-8 bg-white':'w-3 bg-white/70'} `}/>

          
        ))}
      </div>
    </>
  );
};

export default WorkWrapper;
