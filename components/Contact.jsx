import Image from "next/image";
import React from "react";
import contactImg from "../public/assets/contact.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="m-auto w-full max-w-[1240px] px-2 py-16">
        <p className="py-4 text-xl uppercase tracking-widest text-[#5651e5]">
          Contact
        </p>
        <h2 className=" pt-4 pb-6">Get in Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/*left*/}
          <div className="col-span-3 h-full w-full rounded-xl p-4 shadow-xl  shadow-gray-400 lg:col-span-2">
            <div className="h-full  lg:p-4">
              <div className="pb-3">
                <Image
                  className="ro rounded-xl duration-300 ease-in hover:scale-105"
                  src={contactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Tserenbal Ganbat</h2>
                <p>Front-End Developer</p>
                <p className="py-6">
                  I am available for full-time postion or freelance. Reach out
                  and Lets talk
                </p>
              </div>
              <div>
                <p
                  className="pt-8
                uppercase"
                >
                  Connect with me
                </p>

                <div className="m-auto flex items-center justify-between py-4 ">
                  <div className=" cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                    <FaLinkedin />
                  </div>
                  <div className=" cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                    <FaGithub />
                  </div>
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
          {/*right*/}
          <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex rounded-xl border-2 p-3  shadow-xl"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone number
                    </label>
                    <input
                      className="flex rounded-xl border-2 p-3  shadow-xl"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex rounded-xl border-2 p-3  shadow-xl"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    rows="10"
                    className="flex rounded-xl border-2 p-3  shadow-xl"
                    type="text"
                  />
                </div>
                <button className="mt-4 w-full p-4 text-gray-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
