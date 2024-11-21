import { stepItems } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Steps = () => {
  return (
    <section id="steps" className="relative mt-[80px] xl:mt-[200px] z-20">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-12 gap-20">
          {stepItems.map((step, index) => (
            <div
              className="flex flex-col items-center w-[358px] text-center space-y-[20px] cursor-pointer"
              key={index}
            >
              <Image src={step.icon} width={45} height={45} alt={step.title} />
              <h1 className="text-[23px]">{step.title}</h1>
              <p>{step.description}</p>
              <div className="flex flex-row items-center">
                <p>Read More</p>
                <ArrowRight className="text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
