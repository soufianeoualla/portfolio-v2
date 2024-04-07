import { Header } from "@/components/Header";
import Link from "next/link";
import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhone, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ContactFrom } from "@/components/ContactFrom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const page = () => {
  return (
    <div className="p-2">
      <Header />
      <div className="mt-20 grid grid-cols-2 mb-20 sm:grid-cols-1 sm:gap-y-8 sm:p-4">
        <div>
          <h1>Contact Info</h1>
          <div className="flex items-center gap-x-4 mt-4">
            <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-gradient-to-br from-accent/40 to-card border border-opacity-35">
              <IoMail className="text-xl" />
            </div>
            <div className=" grid">
              <span>Contact@soufian.me</span>
              <span>soufianeoualla0@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-x-4 mt-8">
            <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-gradient-to-br from-accent/40 to-card border border-opacity-35">
              <FaPhone className="text-xl" />
            </div>
            +212 631849816
          </div>

          <div className="mt-8">
            <h1>Social Info</h1>
            <div className="flex items-center gap-x-4 mt-4">
              <Link
                className="w-16 h-16 rounded-full flex justify-center items-center bg-gradient-to-br from-accent/40 to-card border border-opacity-35 hover:from-card/40 hover:to-accent "
                href={""}
              >
                <FaLinkedin className="text-3xl" />
              </Link>
              <Link
                className="w-16 h-16 rounded-full flex justify-center items-center bg-gradient-to-br from-accent/40 to-card border border-opacity-35 hover:from-card/40 hover:to-accent "
                href={""}
              >
                <FaSquareInstagram className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
        <Card className="bg-gradient-to-br from-accent/40 to-card border border-opacity-35">
          <CardHeader>
            {" "}
            <h1 className="text-3xl font-bold">
              Let&apos;s  Work{" "}
              <span className="text-[#7b5cfa]/80">Together.</span>
            </h1>
          </CardHeader>
          <CardContent>
            <ContactFrom />
          </CardContent>
        </Card>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
