import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Aboutme = () => {
  return (
    <div className="max-w-10xl mx-auto">
      <div className="relative">
        <Image
          src="/images/bgprofile.png"
          width={500}
          height={500}
          alt="Background profile"
          className="w-full h-48 object-cover rounded-sm"
        />
        <div className="absolute flex max-sm:flex-col left-10 top-32 max-sm:left-24">
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
        </div>

        {/* Di chuyển nút Contact sang bên phải */}
        <div className="absolute max-sm:flex-col max-sm:left-0 right-10 max-sm:top-96 top-52">
          <Button className="bg-blue-400 max-sm:w-96">
            <Mail className="mr-2 h-4 w-4" /> Contact
          </Button>
        </div>
      </div>

      <div className="mt-2 p-10 md:bg-gray-100 rounded-sm"></div>
    </div>
  );
};

export default Aboutme;
