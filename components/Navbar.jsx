import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setlinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setlinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setlinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "rounded- fixed  z-[100] h-20 w-full pt-2 shadow-xl"
          : "rounded- fixed  z-[100] h-20 w-full pt-2"
      }
    >
      <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
        <Link href="/">
          <h1
            style={{ color: `${linkColor}` }}
            className="cursor-pointer  pl-8 text-lg
          "
          >
            Tserenbal <span className="font-normal">Ganbat</span>
            <h1 className="text-lg text-[#5651e5]">バル</h1>
          </h1>
        </Link>

        <ul
          style={{ color: `${linkColor}` }}
          className=" hidden px-4 pr-8 md:flex "
        >
          <Link href="/">
            <li className="hover:border-dashed-bottom ml-10 text-sm uppercase">
              home
            </li>
          </Link>
          <Link href="/#about">
            <li className="hover:border-dashed-bottom ml-10 text-sm uppercase">
              about
            </li>
          </Link>
          <Link href="/#skills">
            <li className="hover:border-dashed-bottom ml-10 text-sm uppercase">
              skills
            </li>
          </Link>
          <Link href="/#projects">
            <li className="hover:border-dashed-bottom ml-10 text-sm uppercase">
              projects
            </li>
          </Link>
          <Link href="/#contact">
            <li className="hover:border-dashed-bottom ml-10 text-sm uppercase">
              contact
            </li>
          </Link>
        </ul>
        <div onClick={handleNav} className="pr-8 hover:scale-110 md:hidden ">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav ? "fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden" : " "
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 h-screen w-[75%]  bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]"
              : "fixed left-[-100%] duration-500 ease-in"
          }
        >
          <div>
            <div className="width-full flex  items-center justify-between">
              <h1 className="text-sm">Tserenbal Ganbat </h1>
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400  hover:scale-110"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className=" my-4 border-b border-gray-300"></div>
          </div>
          <div className="flex-col py-1">
            <ul className=" uppercase ">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651ef] ">
                Lets Connect
              </p>
              <div className="my-4  flex w-full items-center  justify-between sm:w-[80%] ">
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-105">
                  <FaLinkedin />
                </div>
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-105">
                  <FaGithub />
                </div>
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-105">
                  <AiOutlineMail />
                </div>
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-105">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
