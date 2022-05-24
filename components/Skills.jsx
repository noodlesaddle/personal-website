import React from "react";
import Image from "next/image";
import Html from "../public/assets/skills/html.jpg";
import Css from "../public/assets/skills/css.jpg";
import Javascript from "../public/assets/skills/javascript.jpg";
import Reacts from "../public/assets/skills/react.jpg";
import Tailwind from "../public/assets/skills/tailwind.jpg";
import Figma from "../public/assets/skills/figma.jpg";
import Firebase from "../public/assets/skills/firebase.jpg";
import Xd from "../public/assets/skills/XD.jpg";
const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
        <p className="py-4 text-xl uppercase tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Html} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Css} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Javascript} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Reacts} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Tailwind} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwindcss</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Firebase} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Figma} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Xd} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Adobe XD</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
