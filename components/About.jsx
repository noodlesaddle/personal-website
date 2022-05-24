import React from "react";
import Image from "next/image";
import Link from "next/link";
import Me from "../public/assets/me.jpg";

const About = () => {
  return (
    <div
      id="about"
      className=" flex w-full items-center p-2 py-16  md:h-screen"
    >
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-6 ">Who I am </h2>
          <p className="py-2 text-gray-600">
            {" "}
            Greetings! 👋 I am Tserenbal (バル).
            <br></br>Born in the Gobi desert of Mongolia and raised as a nomad,
            transforming to be a digital nomad.Aspiring to develop products with
            simplicity, efficiency and empathy in mind to make people's lives
            easier.
            <div className="py-6">
              <p>
                I have broad experience working as designer on web applications,
                mobile applications and mobile games using prototyping tool like
                Figma, AdobeXD, design tools like Adobe PS, AI and Blender.
                Recently, started to translate the designs into clear codes
                using{" "}
                <span className="text-[#5651e5] underline">
                  {" "}
                  page structure
                </span>{" "}
                /html/ ,
                <span className="text-[#5651e5] underline">styling</span>{" "}
                /css,tailwindcss/, and{" "}
                <span className="text-[#5651e5] underline"> javascript</span>{" "}
                /react,next/.{" "}
              </p>
            </div>
          </p>
          <br className="py-12"></br>
          <button className="md:p-auto py-2 px-4 font-light">
            <a href="https://drive.google.com/file/d/1m-rJdAipCi9UBTOhjV_75U5Aa6F0qYuf/view?usp=sharing">
              Download my Resume from here
            </a>
          </button>
        </div>
        <div className=" m-auto flex h-auto w-full scale-105 items-center justify-center rounded-full py-4 ">
          <Image src={Me} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
