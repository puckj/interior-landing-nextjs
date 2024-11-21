import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative z-20 bg-hero h-[640px] xl:h-[840px] lg:bg-cover bg-center bg-no-repeat
        bg-fixed xl:rounded-bl-[290px]"
    >
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
        <div
          className="flex flex-col items-center text-center xl:text-left w-[567px] lg:items-start
            gap-[21px]"
        >
          <h1 className="h1">Let Your Home Be Unique</h1>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available,variations of the passages. Btn text: Get free estimation
          </p>
          <button className="btn btn-primary mx-auto xl:mx-0">
            Get free estimation
            <ArrowRight className="text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
