import React from "react";
import Image from "next/image";

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
                <Image
                  src="/../public/assets/skills/html.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwindcss</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/Firebase.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/figma.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl  p-6 shadow-xl duration-300 ease-in hover:scale-105 ">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/xd.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
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
