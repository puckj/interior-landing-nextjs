import { newsItems } from "@/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

const News = () => {
  return (
    <section
      id="news"
      className="relative z-20 xl:mt-[150px] mt-[80px] sm:px-10"
    >
      {/* News */}
      <div
        className="max-xl:container mx-auto max-w-[1200px] flex flex-col items-center
          justify-center gap-[52px]"
      >
        <div className="max-w-[700px] text-center space-y-[12px]">
          <h2 className="h2" data-aos="fade-up">
            Article&News
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Stay updated with the latest trends, tips, and insights in interior
            design. Discover inspiring stories and expert advice to transform
            your space.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-[27px]">
          {newsItems.map((item, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
              <div
                className="p-[21px] pb-[37px] border border-primary/20 rounded-[62px] flex flex-col
                  gap-[21px] items-center max-w-[382px] bg-white hover:bg-accent-seconday group
                  transition-all duration-300 cursor-pointer mx-auto xl:mx-0"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={340}
                  height={340}
                />
                <div className="flex flex-col gap-[31px]">
                  <h3 className="h3">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-base">{item.date}</p>
                    <button
                      className="w-[52px] h-[52px] flex items-center justify-center bg-accent/15
                        group-hover:bg-white transition-all duration-300 rounded-full"
                    >
                      <ChevronRight width={32} height={32} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* contact with us */}
      <div
        className="bg-primary max-xl:container xl:mt-[150px] mt-[80px] mx-auto max-w-[1200px]
          sm:rounded-[70px] flex flex-col justify-center py-[80px]"
        data-aos="fade-up"
      >
        <div
          className="max-w-[640px] mx-auto text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="h2 text-white mb-4">Wanna join the interno?</h2>
          <p className="text-white mb-8 mx-auto max-w-sm sm:max-w-none">
            Let’s create something extraordinary together.
          </p>
          <button className="btn btn-accent mx-auto">
            <p className="text-[18px]">Contact With Us</p>
            <ArrowRight className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
