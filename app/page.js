import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@/components/Avatar";


export const metadata = {
  title: "Pham Anh Dung",
  description: "CV - Pham Anh Dung dev",
  icons: {
    icon: '/icons/logo.svg',
    shortcut: '/icons/logo.svg'
  }
};



export default function Home() {
  return (
    <div className="flex justify-evenly max-sm:flex-col mt-16">
      <div className="relative flex items-center justify-center">
        <Avatar isOnline={false} imageUrl="/images/dungpham.jpg" width={450} height={450}/>
      </div>

      <div className="flex flex-col md:mt-20 max-sm:mt-10 max-sm:items-center">

        <div className="flex flex-col items-start">
          <h1 className="text-6xl max-sm:text-3xl font-bold md:my-3">Phạm Anh Dũng</h1>
          <p className="text-3xl max-sm:text-2xl max-sm:items-center text-gray-500 my-3">
            Software Engineer
          </p>
        </div>

        <div className="items-start my-3 max-w-[650px] max-sm:mx-5">
          <p className="text-lg">
            Software Development Engineer specializing in full-stack
            software application development. My skills include programming 
            using frameworks with JavaScript for frontend development, 
            and .NET and Java for Backend services.
          </p>
        </div>

        <div className="flex justify-end my-3 w-full">
          <Link href="/aboutme" passHref>
            <Button className="bg-white max-sm:bg-orange-600 border-none text-black hover:bg-orange-600 hover:text-white transition duration-200 flex items-center">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>


    </div>
  );
}
