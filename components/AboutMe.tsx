import Image from "next/image";
import { Card, CardDescription } from "./ui/card";
import image from '@/public/profile.png'
export const AboutMe = () => {
  return (
    <Card className="flex items-center gap-x-8 rounded-3xl bg-gradient-to-br from-accent/40 to-card p-12 md:p-8 ">
      <Image src={image} alt="picture" className="w-1/2 md:w-1/3
       rounded-tl-3xl rounded-br-3xl bg-card/40" />
      <div className="space-y-4">
        <div className="space-y-1 uppercase tracking-wide">
        <CardDescription>A front-end developer</CardDescription>
          <h1 className="text-3xl font-bold tracking-wider">
            SOUFIANE <br />
            OUALLA
          </h1>
        </div>
        <p className="-tracking-wide">
          I&apos;m a Front-end Developer based in Morocco passionate about
          building accessible web apps.
        </p>
      </div>
    </Card>
  );
};
