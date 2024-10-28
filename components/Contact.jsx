import {
  Facebook,
  GithubIcon,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import React from "react";
import Link from "next/link";
const Contact = ({ hidden }) => {
  return (
    <div className={`flex flex-col ${hidden ? "hidden" : "block"}`}>
      <div className="flex items-center text-base md:hidden">
        <p className="font-bold text-orange-400 text-3xl">|</p>
        <span className="font-bold text-2xl ml-2"> Contact</span>
      </div>

      <div className="flex max-sm:mt-7">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center text-base">
            <Mail />
            <p className="ml-4">Email</p>
          </div>
          <div className="flex items-center text-base">
            <Phone />
            <p className="ml-4">Phone</p>
          </div>
          <div className="flex items-center text-base">
            <Linkedin />
            <p className="ml-4">Linkedin</p>
          </div>
          <div className="flex items-center text-base">
            <GithubIcon />
            <p className="ml-4">Github</p>
          </div>
          <div className="flex items-center text-base">
            <Facebook />
            <p className="ml-4">Facebook</p>
          </div>
          <div className="flex items-center text-base">
            <Instagram />
            <p className="ml-4">Instagram</p>
          </div>
        </div>

        <div className="flex flex-col space-y-5 ml-4">
          <div className="flex items-center text-base font-bold">
            <Link href="https://github.com/PhamAnhDungdev" passHref>
              <p className="ml-4">dungdev90@gmail.com</p>
            </Link>
          </div>

          <div className="flex items-center text-base font-bold">
            <Link href="#" passHref>
              <p className="ml-4">098 1153 101</p>
            </Link>
          </div>
          <div className="flex items-center text-base font-bold">
            <Link href="https://www.linkedin.com/in/phamanhdungdev19/" passHref>
              <p className="ml-4">Anh Dung Pham</p>
            </Link>
          </div>

          <div className="flex items-center text-base font-bold">
            <Link href="https://github.com/PhamAnhDungdev" passHref>
              <p className="ml-4">PhamAnhDungdev</p>
            </Link>
          </div>

          <div className="flex items-center text-base font-bold">
            <Link href="https://facebook.com/PhamAnhDung.Dev19" passHref>
              <p className="ml-4">Anh Dung Pham</p>
            </Link>
          </div>
          <div className="flex items-center text-base font-bold">
            <Link href="https://www.instagram.com/phamhdung_/" passHref>
              <p className="ml-4">phamhdung_</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
