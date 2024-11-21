"use client";
import { navLinks } from "@/constants";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  return (
    <header className="sticky top-0 h-[90px] shadow-lg z-30 bg-white">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/">
          <Image src={"/logo.svg"} width={133} height={50} alt="Interno Logo" />
        </Link>
        <nav className="flex">
          <button
            className="cursor-pointer lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X width={25} height={25} />
            ) : (
              <Menu width={25} height={25} />
            )}
          </button>
          <ul
            className={`fixed w-full p-0 bg-white top-[89px] border left-0 right-0 flex flex-col gap-10
              lg:relative lg:flex-row lg:p-0 lg:top-0 lg:h-full lg:border-none max-lg:gap-4
              max-lg:px-10 max-lg:py-6 ${!isMenuOpen ? "max-lg:hidden" : ""}`}
          >
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="text-secondary hover:text-accent-hover transition-colors duration-400
                  text-[20px]"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
