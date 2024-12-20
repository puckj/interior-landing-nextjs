import { statItems, workItems } from "@/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <section id="work" className="relative z-20 xl:mt-[150px] mt-[80px]">
      {/* Projects */}
      <div
        className="max-xl:container mx-auto max-w-[1200px] flex flex-col items-center
          justify-center"
      >
        {/* Title */}
        <div
          className="text-center max-w-[700px] space-y-[8px] mb-[90px] max-sm:mb-[50px]"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <h2 className="h2 max-sm:text-[48px]">Follow Our Projects</h2>
          <p>
            Explore our latest projects and see how we bring unique designs to
            life. Get inspired by our creativity and attention to detail.
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full gap-x-[104px] gap-y-[55px]">
          {workItems.map((item, index) => (
            // Item
            <div
              key={index}
              className="flex flex-col max-lg:max-w-[550px] mx-auto"
              data-aos="fade-up"
              // data-aos-offset="300"
              data-aos-delay={index * 100}
            >
              <Image src={item.url} alt={item.name} width={550} height={550} />
              <div className="flex flex-row justify-between mt-[24px]">
                <div>
                  <h3>{item.name}</h3>
                  <p className="max-sm:text-[18px]">{item.description}</p>
                </div>
                <button
                  className="w-[70px] h-[70px] flex items-center justify-center bg-accent/15
                    hover:bg-accent/30 transition-colors duration-300 rounded-full"
                >
                  <ChevronRight width={32} height={32} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Stats */}
      <div className="bg-accent-seconday xl:mt-[180px] mt-[80px] xl:py-[150px] py-[80px]">
        <div className="container mx-auto max-w-[1080px] grid xl:grid-cols-4 grid-cols-1 max-xl:gap-12">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="text-center xl:border-r xl:last:border-none xl:border-accent space-y-[16px]"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <h1 className="h1 text-accent">{item.stat}</h1>
              <p className="">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
