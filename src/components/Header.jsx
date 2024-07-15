import React, { useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import { BiDownload } from "react-icons/bi";
import { RiReactjsFill, RiNextjsLine, RiNodejsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { PiFileSql } from "react-icons/pi";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "#about" },
    { title: "Services", link: "#services" },
    { title: "Projects", link: "#projects" },
  ];

  return (
    <header className=" h-screen w-full bg-[#F8F7F1] dark:bg-[#121212] paddings">
      <nav className="text-black  dark:text-[#E0E0E0] flex justify-between items-center py-5">
        <h1 className=" text-primary font-poppins font-semibold text-2xl">
          <span className="text-secondary">Faiz</span> Ali
        </h1>
        <ul className="lg:flex gap-5 items-center hidden">
          {navItems.map((item, i) => {
            return (
              <li
                key={i}
                className="link dark:hover:text-white dark:hover:after:bg-primary"
              >
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-5 items-center">
          <li>
            <ToggleTheme />
          </li>
          <li>
            <a href="">
              <button className="btn bg-secondary hover:bg-secHover text-white">
                Contact
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <section className="flex flex-col lg:flex-row-reverse  items-center w-full  h-[90%] lg:h-[85%]">
        <aside className="w-full h-1/2 lg:h-full relative">
          <img
            src="/src/assets/profile.png"
            alt=""
            className="object-contain h-full w-full border-2 bg-primary border-secondary dark:bg-secondary dark:border-primary rounded-full"
          />
        </aside>
        <aside className="w-full h-1/2 lg:h-full flex items-center lg:items-start justify-between flex-col">
         
          <div className="flex flex-col gap-20 ">
          <div className="flex gap-5 text-2xl dark:text-white mt-5 items-center lg:items-start">
            <IoLogoJavascript />
            <RiReactjsFill />
            <RiNextjsLine />
            <RiNodejsLine />
            <PiFileSql />
          </div>
          <div className="flex flex-col items-center lg:items-start">

            <h2 className="text-3xl dark:text-white font-bubbleGum mb-3">
              Hey! I Am
            </h2>
            <h1 className="text-5xl text-primary font-poppins font-bold">
              Faiz Ali
            </h1>
            <p className="text-xs font-poppins mt-2 dark:text-white text-center">
              Crafting Dynamic Web Experiences with Innovation and Precision
            </p>
            <button className="btn bg-secondary hover:bg-secHover mt-3 text-white flex items-center gap-3">
              Download CV{" "}
              <span>
                <BiDownload className="text-xl" />
              </span>
            </button>
          </div>
          </div>
          <div className="flex gap-5 text-xl text-primary">
            <FaWhatsapp/>
            <FaLinkedin />
            <FaGithub/>
            
          </div>
        </aside>
      </section>
    </header>
  );
};

export default Header;
