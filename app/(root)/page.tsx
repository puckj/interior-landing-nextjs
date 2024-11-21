import NavBar from "@/components/NavBar";
import { HeroSection } from "./_components";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="max-w-[1920px] mx-auto bg-white overflow-hidden relative">
        {/* grid img */}
        <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10" />
        {/* hero section */}
        <HeroSection />
        <div className="h-[3000px]">{/* temporary div for scrolling */}</div>
      </main>
    </>
  );
}
