import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Technologies } from "@/components/Technologies";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
    <Header />
    <main className="mt-20">
      <div className="grid grid-cols-2 gap-x-8 sm:grid-cols-1 sm:gap-y-8 sm:p-4">
        <AboutMe />
        <Work />
      </div>
      <div className="p-4">
        <Technologies />
        <Contact />
      </div>
      <Footer />
    </main>
    </>
  );
}
