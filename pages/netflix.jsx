import React from "react";
import netflixImg from "../public/assets/projects/netflix.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const netflix = () => {
  return (
    <div className="w-full">
      <div className="relative h-[30vh] w-screen lg:h-[40vh]">
        <div className="absolute top-0 left-0 z-10 h-[30vh] w-full bg-black/80 lg:h-[40vh]" />
        <Image
          className="z-1 absolute"
          layout="fill"
          objectFit="cover"
          src={netflixImg}
          alt="/"
        />
        <div className="absolute top-[70%] left-[50%] right-[50%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-2 text-white">
          <h2 className="py-2">Netflix Clone</h2>
          <h3> React JS / Tailwind /Firebase</h3>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-8 p-2 pt-8 md:grid-cols-5">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-4">Overview</h2>
          <p>
            This project was a clone project made on React with user sign up and
            sign in session built with firebase. I also learned about API
            fetching. This project taught me little bit about back-end user data
            fetching.
          </p>
          <button href="" className="mt-4 mr-8 px-8 py-2">
            <a href="https://tserenbal.online/">Demo</a>
          </button>
          <button className="mt-4 mr-8 px-8 py-2">
            <a href="">Code</a>
          </button>
        </div>
        <div className="col-span-4 rounded-xl p-4 shadow-xl shadow-gray-400 md:col-span-1">
          <div className="p-2">
            <p className="pb-2 text-center font-bold">Technologies</p>
            <div className="grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
            </div>
            <div>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
            </div>
            <div>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
            </div>
            <div>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
            </div>
            <div>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Google API
              </p>
            </div>
            <div>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Zillow API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="cursor-pointer underline">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
