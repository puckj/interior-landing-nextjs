import { stepItems } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Steps = () => {
  return (
    <section id="steps" className="relative mt-[80px] xl:mt-[200px] z-20">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-12 gap-20">
          {stepItems.map((step, index) => (
            <div
              className="flex flex-col items-center max-w-[358px] text-center"
              key={index}
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay={index * 300}
            >
              <Image src={step.icon} width={45} height={45} alt={step.title} />
              <h3 className="text-[23px] mb-5 mt-2">{step.title}</h3>
              <p className="mb-9">{step.description}</p>
              <Link
                href="#"
                className="flex link justify-center items-center gap-2 font-medium"
              >
                <p className="text-[18px]">Read More</p>
                <ArrowRight className="text-accent" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
