import React from "react";
import Image from "next/image";

const Skills = ({ hidden }) => {
  return (
    <div
      className={`flex flex-col space-y-4 ${
        hidden ? "hidden" : "block"
      } w-full`}
    >
      <div className="flex items-center text-3xl font-bold space-x-4">
        <p className="font-bold text-orange-400">|</p>
        <span className="max-sm:text-bold max-sm:text-2xl">Front-End</span>
      </div>

      <div className="flex flex-col space-y-4 w-full max-sm:ml-3">
        <div className="flex max-sm:flex-col justify-around w-full">
          <div className="flex items-center md:my-10 w-2/5 max-sm:w-full h-28 bg-gray-300 rounded-lg">
            <Image
              src="/skillsfw/js.png"
              width={100}
              height={100}
              alt="Skill 1"
              className="ml-5 border-4 rounded-full"
            />
            <div className="flex flex-col ml-5 -mt-5">
              <h1 className="text-xl font-semibold">JavaScript</h1>
              <p className="text-center">Basic skill with JavaScript</p>
            </div>
          </div>

          <div className="flex items-center my-10 w-2/5 max-sm:w-full h-28 bg-gray-300 rounded-lg">
            <Image
              src="/skillsfw/nextjs.png"
              width={100}
              height={100}
              alt="Skill 2"
              className="ml-5 border-4 rounded-full"
            />
            <div className="flex flex-col ml-5 -mt-5">
              <h1 className="text-xl font-semibold">NextJs</h1>
              <p className="text-center">Basic skill with NextJs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-full max-sm:ml-3">
        <div className="flex max-sm:flex-col justify-around w-full md:-mt-14">
          <div className="flex items-center md:my-10 w-2/5 max-sm:w-full  h-28 bg-gray-300 rounded-lg">
            <Image
              src="/skillsfw/reactjs.png"
              width={100}
              height={100}
              alt="Skill 1"
              className="ml-5 border-4 rounded-full"
            />
            <div className="flex flex-col ml-5 -mt-5">
              <h1 className="text-xl font-semibold">ReactJs</h1>
              <p className="text-center">Basic skill with JavaScript</p>
            </div>
          </div>

          <div className="flex items-center my-10 w-2/5 max-sm:w-full  h-28 bg-gray-300 rounded-lg">
            <Image
              src="/skillsfw/tailwind.png"
              width={100}
              height={100}
              alt="Skill 2"
              className="ml-5 border-4 rounded-full"
            />
            <div className="flex flex-col ml-5 -mt-5">
              <h1 className="text-xl font-semibold">Tailwind Css</h1>
              <p className="text-center">Basic skill with Tailwind Css</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center text-3xl font-bold space-x-4">
        <p className="font-bold text-orange-400">|</p>
        <span className="max-sm:text-bold max-sm:text-2xl">Back-End</span>
      </div>

      <div className="flex flex-col space-y-4 w-full max-sm:ml-3">
        <div className="flex max-sm:flex-col justify-around w-full">
          <div className="flex items-center md:my-10 w-2/5 max-sm:w-full  h-28 bg-gray-300 rounded-lg">
            <Image
              src="/skillsfw/java.png"
              width={100}
              height={100}
              alt="Skill 1"
              className="ml-5 border-4 rounded-full bg-white"
            />
            <div className="flex flex-col ml-5 -mt-5">
              <h1 className="text-xl font-semibold">Java</h1>
              <p className="text-center">Basic skill with Java</p>
            </div>
          </div>

          <div className="flex items-center my-10 w-2/5 max-sm:w-full  h-28 bg-gray-300 rounded-lg">
            <Image
              src="/skillsfw/csharp.png"
              width={100}
              height={100}
              alt="Skill 2"
              className="ml-5"
            />
            <div className="flex flex-col ml-5 -mt-5">
              <h1 className="text-xl font-semibold">.C#</h1>
              <p className="text-center">Basic skill with C#</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center text-3xl font-bold space-x-4">
        <p className="font-bold text-orange-400">|</p>
        <span className="max-sm:text-bold max-sm:text-2xl">Database</span>
      </div>

      <div className="flex flex-col space-y-4 w-full max-sm:ml-3">
        <div className="flex max-sm:flex-col justify-around w-full">
          <div className="flex items-center md:my-10 w-2/5 max-sm:w-full  h-28 bg-gray-300 rounded-lg">
            <Image
              src="/skillsfw/mysql.png"
              width={100}
              height={100}
              alt="Skill 1"
              className="ml-5 border-4 rounded-full bg-white"
            />
            <div className="flex flex-col ml-5 -mt-5">
              <h1 className="text-xl font-semibold">MySQL</h1>
              <p className="text-center">Basic skill with MySQL</p>
            </div>
          </div>

          <div className="flex items-center my-10 w-2/5 max-sm:w-full  h-28 bg-gray-300 rounded-lg">
            <Image
              src="/skillsfw/sqlserver.png"
              width={100}
              height={100}
              alt="Skill 2"
              className="ml-5 border-4 rounded-full bg-white"
            />
            <div className="flex flex-col ml-5 -mt-5">
              <h1 className="text-xl font-semibold">SqlServer</h1>
              <p className="text-center">Intermediate skill with SqlServer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center text-3xl font-bold space-x-4">
        <p className="font-bold text-orange-400">|</p>
        <span className="max-sm:text-bold max-sm:text-2xl">Others tools</span>
      </div>

      <div className="flex flex-col space-y-4 w-full max-sm:ml-3">
        <div className="flex max-sm:flex-col justify-around w-full">
          <div className="flex items-center md:my-10 w-2/5 max-sm:w-full  h-28 bg-gray-300 rounded-lg">
            <Image
              src="/skillsfw/git.png"
              width={100}
              height={100}
              alt="Skill 1"
              className="ml-5 border-4 rounded-full bg-white"
            />
            <div className="flex flex-col ml-5 -mt-5">
              <h1 className="text-xl font-semibold">Git</h1>
              <p className="text-center">Good skill with Git</p>
            </div>
          </div>

          <div className="flex items-center my-10 w-2/5 max-sm:w-full  h-28 bg-gray-300 rounded-lg">
            <Image
              src="/skillsfw/postman.png"
              width={100}
              height={100}
              alt="Skill 2"
              className="ml-5 border-4 rounded-full bg-white"
            />
            <div className="flex flex-col ml-5 -mt-5">
              <h1 className="text-xl font-semibold">Postman</h1>
              <p className="text-center">Basic skill with React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
