import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="relative z-20 mt-[80px] xl:mt-[200px]">
      <div className="mx-auto max-w-[1200px] max-md:container">
        <div
          className="flex flex-col xl:flex-row text-center xl:text-left items-center justify-between
            gap-8 xl:gap-[74px]"
        >
          {/* TEXT */}
          <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px]">
            <h2 className="h2 mb-[33px]">
              We Create The Art Of Stylish Living Stylishly
            </h2>
            <p className="mb-[45px]">
              Experience the perfect blend of elegance and functionality in
              every design. We craft spaces that reflect your style and elevate
              your living experience. Let us turn your home into a masterpiece
              of modern living.
            </p>
            <div className="flex items-center justify-center xl:justify-start gap-4">
              <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex items-center justify-center">
                <Phone className="text-accent" width={32} height={32} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">091-234-5678</p>
                <p>Call Us Anytime</p>
              </div>
            </div>
            <button className="btn btn-primary font-semibold mx-auto xl:mx-0 mt-[47px]">
              Get Free Estimate
              <ArrowRight className="text-accent" />
            </button>
          </div>

          {/* IMG */}
          <div
            className="order-1 rounded-bl-[100px] rounded-tr-[200px] max-md:rounded-tr-[150px]
              overflow-hidden max-w-[453px] xl:max-w-none mx-auto xl:mx-0"
          >
            <Image
              src="/about/kitchen.png"
              alt="kitchen"
              width={700}
              height={653}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
