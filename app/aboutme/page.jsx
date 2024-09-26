"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleUserRound, ContactRound, ListChecks, Mail } from "lucide-react";
import OverviewInformations from "@/components/OverviewInformations";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

const Aboutme = () => {
  const [selectedButton, setSelectedButton] = useState("overview"); // Default to overview
  const [hiddenStates, setHiddenStates] = useState({
    overview: false,
    contact: true,
    skills: true,
  });

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    setHiddenStates({
      overview: buttonId !== "overview",
      contact: buttonId !== "contact",
      skills: buttonId !== "skills",
    });
  };

  return (
    <div className="max-w-10xl mx-auto">
      <div className="relative">
        {/* <div className="w-full h-10 object-cover rounded-sm"></div> */}
        {/* <div className="absolute flex max-sm:flex-col left-10 top-32 max-sm:left-24">
          <Image
            src="/images/profile.jpg"
            width={300}
            height={300}
            alt="Ảnh đại diện"
            className="flex w-44 h-44 rounded-full border-4 border-white"
          />
          <div className="flex flex-col md:mt-20 md:px-4">
            <h1 className="text-2xl font-bold">Phạm Anh Dũng</h1>
            <p className="text-xl text-gray-500 my-1">Software Engineer</p>
          </div>
        </div> */}

        {/* <div className="absolute max-sm:flex-col max-sm:left-0 right-10 max-sm:top-96 top-52">
          <Button className="bg-blue-400 max-sm:w-96">
            <Mail className="mr-2 h-4 w-4" /> Contact
          </Button>
        </div> */}
      </div>

      {/* <div className="my-2 p-10 md:bg-gray-50 rounded-sm"></div> */}

      <div className="grid grid-cols-12 gap-4 p-10 max-sm:p-4 md:bg-gray-50 rounded-sm mt-10">
        <div className="col-span-3 max-sm:col-span-12 flex md:flex-col max-sm:justify-around pr-2 md:border-r-2 max-sm:border-b-2 border-gray-900">
          <Button
            className={`relative max-sm:w-14 max-sm:h-14 max-sm:rounded-full hover:text-white ${
              selectedButton === "overview"
                ? "bg-black text-white"
                : "bg-gray-100 text-black"
            } pointer-events-auto rounded-none my-[1px] group`}
            onClick={() => handleButtonClick("overview")}
          >
            <CircleUserRound className="absolute md:left-5 max-sm:w-9 max-sm:h-9" />
            <p className="absolute left-16 font-semibold max-sm:hidden">
              Overview information
            </p>
          </Button>
          <Button
            className={`relative max-sm:w-14 max-sm:h-14 max-sm:rounded-full hover:text-white ${
              selectedButton === "contact"
                ? "bg-black text-white"
                : "bg-gray-100 text-black"
            } pointer-events-auto border-none my-[1px] rounded-none group`}
            onClick={() => handleButtonClick("contact")}
          >
            <ContactRound className="absolute md:left-5  max-sm:w-9 max-sm:h-9" />
            <p className="absolute left-16 font-semibold max-sm:hidden">
              Contact
            </p>
          </Button>
          <Button
            className={`relative max-sm:w-14 max-sm:h-14 max-sm:rounded-full hover:text-white ${
              selectedButton === "skills"
                ? "bg-black text-white"
                : "bg-gray-100 text-black"
            } pointer-events-auto border-none my-[1px] rounded-none group`}
            onClick={() => handleButtonClick("skills")}
          >
            <ListChecks className="absolute md:left-5  max-sm:w-9 max-sm:h-9" />
            <p className="absolute left-16 font-semibold max-sm:hidden">
              Skills
            </p>
          </Button>
        </div>
        <div className="col-span-9 max-sm:col-span-12 flex flex-col max-sm:-ml-5">
          <div className="flex">
            <OverviewInformations hidden={hiddenStates.overview} />
          </div>
          <div className="flex">
            <Contact hidden={hiddenStates.contact} />
          </div>
          <div className="flex">
            <Skills hidden={hiddenStates.skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
