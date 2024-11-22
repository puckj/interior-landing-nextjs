import { ArrowRight } from "lucide-react";

const Hero = () => {
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
            Transform your living space with personalized designs that reflect
            your style. We bring creativity and functionality together to make
            your home truly unique.
          </p>
          <button className="btn btn-primary font-semibold mx-auto xl:mx-0">
            Get Started
            <ArrowRight className="text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
