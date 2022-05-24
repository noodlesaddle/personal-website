import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="group relative flex h-auto w-full items-center justify-center rounded-xl from-[#5651e5] to-[#709dff] p-4 shadow-xl shadow-gray-400 hover:bg-gradient-to-r ">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
        <h3 className="text-center text-2xl tracking-wider text-white">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center text-white"> </p>
        <Link href={projectUrl}>
          <p className=" cursor-pointer rounded-lg bg-white p-3 text-center text-lg font-bold text-gray-700">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
