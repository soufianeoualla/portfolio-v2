import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import WorkWrapper from "@/components/work/workWrapper";

const page = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <WorkWrapper/>
        <Footer />
      </main>
    </>
  );
};

export default page;
