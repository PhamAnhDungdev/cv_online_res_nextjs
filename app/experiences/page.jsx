import React from "react";
import Image from "next/image";
const Experiences = ({ hidden }) => {
  return (
    <div className={`flex flex-col justify-center items-center ${hidden ? "hidden" : "block"}`}>


      <div className="flex md:w-[750px] max-sm:w-[550px] max-sm:ml-40 bg-gray-200 my-10 h-32 rounded-lg items-center">
        <Image
          src="/skillsfw/js.png"
          width={110}
          height={110}
          alt="Skill JavaScript"
          className="ml-16 border-4 border-gray-100"
        />
        <div className="flex flex-col ml-10 space-y-2">
          <h1 className="font-bold text-3xl text-orange-500">JavaScript</h1>
          <div className="rounded-full border-2 w-36 border-gray-950 bg-white">
            <h1 className="text-center font-bold"> 4 Month </h1>  
          </div>
          <p className="font-sans text-lg">4 month experiences with JavaScript</p>
        </div>
      </div>

      <div className="flex w-[750px] bg-gray-200 my-10 h-32 rounded-lg items-center">
        <Image
          src="/skillsfw/nextjs.png"
          width={110}
          height={110}
          alt="Skill JavaScript"
          className="ml-16 border-4 border-gray-100 bg-white"
        />
        <div className="flex flex-col ml-10 space-y-2">
          <h1 className="font-bold text-3xl text-orange-500">NextJs</h1>
          <div className="rounded-full border-2 w-36 border-gray-950 bg-white">
            <h1 className="text-center font-bold"> 4 Month </h1>  
          </div>
          <p className="font-sans text-lg">4 month experiences with NextJs.</p>
        </div>
      </div>


      <div className="flex w-[750px] bg-gray-200 my-10 h-32 rounded-lg items-center">
        <Image
          src="/skillsfw/java.png"
          width={110}
          height={110}
          alt="Skill JavaScript"
          className="ml-16 border-4 border-gray-100 bg-white"
        />
        <div className="flex flex-col ml-10 space-y-2">
          <h1 className="font-bold text-3xl text-orange-500">Java</h1>
          <div className="rounded-full border-2 w-36 border-gray-950 bg-white">
            <h1 className="text-center font-bold"> 1 Year </h1>  
          </div>
          <p className="font-sans text-lg">1 year experiences with Java</p>
        </div>
      </div>


      <div className="flex w-[750px] bg-gray-200 my-10 h-32 rounded-lg items-center">
        <Image
          src="/skillsfw/csharp.png"
          width={110}
          height={110}
          alt="Skill JavaScript"
          className="ml-16 border-4 border-gray-100 bg-white"
        />
        <div className="flex flex-col ml-10 space-y-2">
          <h1 className="font-bold text-3xl text-orange-500">C# .NET</h1>
          <div className="rounded-full border-2 w-36 border-gray-950 bg-white">
            <h1 className="font-bold text-center"> 6 Month </h1>  
          </div>
          <p className="font-sans text-lg">6 month experiences with C#, .NET.</p>
        </div>
      </div>

    </div>
  );
};

export default Experiences;
