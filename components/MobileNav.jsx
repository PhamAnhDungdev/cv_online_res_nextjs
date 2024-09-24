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
          <Image
            src="/icons/menu.svg"
            width={45}
            height={45}
            alt="hamburger icon"
            className="cursor-pointer mr-3"
          />
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
              <section className=" flex h-full flex-col gap-6 pt-16 text-black">
                {navbarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-blue-500": isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imgUrl}
                          alt={item.label}
                          width={20}
                          height={20}
                          className="text-white"
                        />
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
