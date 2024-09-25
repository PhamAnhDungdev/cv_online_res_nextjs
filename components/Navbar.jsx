"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const index = navbarLinks.findIndex((item) => item.route === pathname);
    setSelectedItem(index !== -1 ? index : null);
  }, [pathname]);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="flex justify-between fixed z-50 w-full first-letter:px-6 py-4 lg:px-10
        top-0 left-0 h-16 bg-white bg-opacity-100 shadow-md
    ">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/profile.jpg"
          width={45}
          height={45}
          alt="CV logo"
          className="max-sm:w-10 max-sm:h-10 max-sm:ml-4 rounded-full border-2 border-gray-800"
        />
        <p className="text-[26px] font-extrabold text-gray-500 max-sm:hidden">
          {/* Tiêu đề */}
        </p>
      </Link>

      <div className="flex items-center gap-x-8 mr-60 max-sm:hidden">
        {navbarLinks.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`flex items-center gap-1 cursor-pointer px-6 py-3 rounded-lg transition-all duration-300 ease-in-out ${
              selectedItem === index
                ? "bg-orange-500 shadow-lg"
                : "hover:bg-orange-200"
            }`}
          >
            <Link href={item.route} className="flex items-center gap-2">
              <Image
                src={item.imgUrl}
                width={25}
                height={25}
                alt={item.label}
                className={`max-sm:w-10 max-sm:h-10 transition-transform duration-300 ease-in-out ${
                  selectedItem === index
                    ? "transform scale-110"
                    : "hover:scale-110"
                }`}
              />
              <p
                className={`text-md font-semibold ${
                  selectedItem === index ? "text-white" : "text-black"
                } transition-colors duration-300 ease-in-out hover:text-gray-800`}
              >
                {item.label}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-end justify-end w-full max-w-[264px] md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
