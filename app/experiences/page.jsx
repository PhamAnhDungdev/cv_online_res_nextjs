import React from "react";
import Image from "next/image";
const Experiences = ({ hidden }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        hidden ? "hidden" : "block"
      }`}
    >
      <div className="flex md:w-2/3 max-sm:w-full bg-gray-200 md:my-8 max-sm:my-5 h-32 rounded-lg items-center">
        <Image
          src="/skillsfw/js.png"
          width={110}
          height={110}
          alt="Skill JavaScript"
          className="md:ml-16 max-sm:ml-6 border-4 border-gray-100"
        />
        <div className="flex flex-col md:ml-10 max-sm:ml-5 space-y-2">
          <h1 className="font-bold md:text-3xl max-sm:text-xl text-orange-500">JavaScript</h1>
          <div className="rounded-full border-2 w-36 border-gray-950 bg-white">
            <h1 className="text-center font-bold"> 4 Month </h1>
          </div>
          <p className="font-sans md:text-lg max-sm:text-base">
            4 month experiences with JavaScript
          </p>
        </div>
      </div>

      <div className="flex md:w-2/3 max-sm:w-full bg-gray-200 md:my-8 max-sm:my-5 h-32 rounded-lg items-center">
        <Image
          src="/skillsfw/nextjs.png"
          width={110}
          height={110}
          alt="Skill JavaScript"
          className="md:ml-16 max-sm:ml-6 border-4 border-gray-100"
        />
        <div className="flex flex-col md:ml-10 max-sm:ml-5 space-y-2">
          <h1 className="font-bold md:text-3xl max-sm:text-xl text-orange-500">NextJs</h1>
          <div className="rounded-full border-2 w-36 border-gray-950 bg-white">
            <h1 className="text-center font-bold"> 4 Month </h1>  
          </div>
          <p className="font-sans md:text-lg max-sm:text-base">4 month experiences with NextJs.</p>
        </div>
      </div>


      <div className="flex md:w-2/3 max-sm:w-full bg-gray-200 md:my-8 max-sm:my-5 h-32 rounded-lg items-center">
        <Image
          src="/skillsfw/java.png"
          width={110}
          height={110}
          alt="Skill JavaScript"
          className="md:ml-16 max-sm:ml-6 border-4 border-gray-100"
        />
        <div className="flex flex-col md:ml-10 max-sm:ml-5 space-y-2">
          <h1 className="font-bold md:text-3xl max-sm:text-xl text-orange-500">Java</h1>
          <div className="rounded-full border-2 w-36 border-gray-950 bg-white">
            <h1 className="text-center font-bold"> 1 Year </h1>  
          </div>
          <p className="font-sans md:text-lg max-sm:text-base">1 year experiences with Java</p>
        </div>
      </div>


      <div className="flex md:w-2/3 max-sm:w-full bg-gray-200 md:my-8 max-sm:my-5 h-32 rounded-lg items-center">
        <Image
          src="/skillsfw/csharp.png"
          width={110}
          height={110}
          alt="Skill JavaScript"
          className="md:ml-16 max-sm:ml-6 border-4 border-gray-100"
        />
        <div className="flex flex-col md:ml-10 max-sm:ml-5 space-y-2">
          <h1 className="font-bold md:text-3xl max-sm:text-xl text-orange-500">C# .NET</h1>
          <div className="rounded-full border-2 w-36 border-gray-950 bg-white">
            <h1 className="font-bold text-center"> 6 Month </h1>  
          </div>
          <p className="font-sans md:text-lg max-sm:text-base">6 month experiences with C#, .NET.</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
