"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section>
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex items-center">
            <p className="text-[20px] font-bold text-black mr-[100px] mt-3">CV Online</p>
            {/* Văn bản logo */}
            <Image
              src="/icons/menu.svg"
              width={45}
              height={45}
              alt="hamburger icon"
              className="cursor-pointer mr-2"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/profile.jpg"
              width={32}
              height={32}
              alt="PROFILE"
              className="rounded-full"
            />
            <p className="text-[26px] font-extrabold text-black">Dung Pham</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className=" flex h-full flex-col gap-4 pt-8 text-black">
                {navbarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60 border-b-4",
                          {
                            "bg-orange-500": isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imgUrl}
                          alt={item.label}
                          width={30}
                          height={30}
                          className="text-white"
                        />
                        <p className="font-semibold text-xl">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
            <div className="mb-11 w-full">
              <h1 className="font-bold text-xl text-center">
                Phạm Anh Dũng - CV Online
              </h1>
              <p className="text-center">Update - 09/2024</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
