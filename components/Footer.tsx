import { footerItems, socialItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-20 xl:mt-[150px] mt-[80px]">
      <div
        className="max-xl:container !px-0 mx-auto max-w-[1200px] flex xl:flex-row flex-col
          justify-between max-xl:items-center"
      >
        <div
          className="max-w-[400px] flex flex-col max-xl:items-center"
          data-aos="fade-up"
        >
          <Image src="/logo.svg" alt="Interno Logo" width={150} height={150} />
          <p className="mt-[18px] max-xl:text-center">
            Creating unique and timeless interior designs that inspire every
            day.
          </p>
          <div className="flex flex-row gap-[54px] mt-[31px]">
            {socialItems.map((item, index) => (
              <Link href={item.href} key={index} target="_blank">
                <Image
                  src={item.img}
                  alt="social media"
                  width={18}
                  height={18}
                />
              </Link>
            ))}
          </div>
        </div>
        <div
          className="flex xl:flex-row flex-col gap-[120px] max-xl:gap-[60px] max-xl:text-center
            max-xl:mt-[60px]"
        >
          {footerItems.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <h3 className="h3">{item.label}</h3>
              <div className="flex flex-col gap-5 mt-[15px]">
                {item.subMenu.map((subItem, index) => (
                  <Link href={subItem.href} key={index} className="link">
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div
            className="max-w-[300px] text-[20px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="h3 mb-[15px]">Contact</h3>
            <div className="space-y-4">
              <p>888/1 Rama IV Rd, Wang Mai, Pathum Wan, Bangkok 10330</p>
              <p>contact@interno.com</p>
              <p>091-234-5678</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[18px] xl:mt-[150px] mt-[80px] mb-[48px]">
        Copyright © Interno 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
