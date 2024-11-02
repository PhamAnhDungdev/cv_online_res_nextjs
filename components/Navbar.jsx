"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navbarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";

import MobileNav from "./MobileNav";
import Avatar from "@/components/Avatar";
import { Button } from "./ui/button";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const index = navbarLinks.findIndex((item) => item.route === pathname);
    setSelectedItem(index !== -1 ? index : null);
  }, [pathname]);

  const handleClick = (index, item) => {
    setSelectedItem(index);
    router.push(item.route);
  };

  return (
    <div
      className="flex justify-between fixed w-full first-letter:px-6 py-4 lg:px-10
        top-0 left-0 h-16 bg-white bg-opacity-100 shadow-md
    "
    >
      <Link href="/" className="flex items-center gap-1">
        <Avatar
          isOnline={false}
          imageUrl="/images/dungpham.jpg"
          width={35}
          height={35}
        />
        <p className="text-md font-medium max-sm:hidden">
          <span>CV-Phạm Anh Dũng</span>
        </p>
      </Link>

      <div className="flex items-center gap-x-8 mr-60 max-sm:hidden">
        {navbarLinks.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index, item)}
            className={`flex items-center gap-1 cursor-pointer px-6 py-3 rounded-lg transition-all duration-300 ease-in-out ${
              selectedItem === index
                ? "bg-orange-500 shadow-lg"
                : "hover:bg-orange-200"
            }`}
          >
            <item.icon className={`text-black ${selectedItem === index ? "text-white" : ""}`} />
            <p
              className={`text-md font-medium ${
                selectedItem === index ? "text-white" : "text-black"
              } transition-colors duration-300 ease-in-out`}
            >
              {item.label}
            </p>
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
