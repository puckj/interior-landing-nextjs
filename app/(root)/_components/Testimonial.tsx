"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { brandItems, testimonialItems } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="relative z-20 mt-[80px] xl:mt-[200px] sm:px-10"
    >
      {/* Testimonials */}
      <div
        className="mx-auto max-w-[1200px] container max-sm:px-6 bg-accent-seconday
          sm:rounded-[70px] flex flex-col justify-center items-center py-[88px]
          max-sm:py-[66px]"
      >
        <h2 className="h2 max-w-[547px] text-center mb-[38px] max-sm:text-[48px]">
          What the People Thinks About Us
        </h2>
        <div className="w-full drop-shadow-sm">
          <div>
            <Swiper
              spaceBetween={20}
              loop={true}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                888: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              modules={[Autoplay]}
            >
              {testimonialItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="w-full xl:max-w-[370px] max-w-[420px] h-[340px] bg-white rounded-[30px] flex
                      flex-col items-center mx-auto cursor-pointer"
                  >
                    <div className="max-w-[280px]">
                      <div className="flex gap-6 items-center mt-[42px] mb-[25px]">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={77}
                          height={77}
                        />
                        <div>
                          <h3 className="h3">{item.name}</h3>
                          <p>{item.location}</p>
                        </div>
                      </div>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* Brands */}
      <div className="container mx-auto max-w-[1200px] xl:mt-[150px] mt-[80px]">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-14">
          {brandItems.map((item, index) => (
            <Image
              key={index}
              src={item.url}
              alt="brand-logo"
              width={120}
              height={120}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
