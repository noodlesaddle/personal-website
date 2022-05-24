import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className=" h-screen w-full text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <p className="text-gray- py-4 uppercase tracking-widest">
            lets build awesome things together
          </p>
          <h1 className="py-3  text-gray-700 ">
            Hi, I am <span className="text-[#5651e5]">Tserenbal</span>{" "}
          </h1>
          <h1 className="py-3 text-gray-700 ">A Front-End Web Develor</h1>
          <p className="m-auto max-w-[70%] py-6 text-gray-600">
            with UI UX designer experience specialized on building exceptional
            digital experience. Currently I am focused on building responsive
            front-end application whilest honning my skills as designer.{" "}
          </p>
          <div className="m-auto flex max-w-[330px] items-center justify-between py-4 ">
            <Link href="https://www.linkedin.com/in/tserenbal/">
              <div className=" cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <FaLinkedin />
              </div>
            </Link>
            <Link href="github">
              <div className=" cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <FaGithub />
              </div>
            </Link>
            <div className=" cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <AiOutlineMail />
            </div>
            <div className=" cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
