import React from "react";

const Header = () => {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "#about" },
    { title: "Services", link: "#services" },
    { title: "Projects", link: "#projects" },
  ];
  return (
    <header className="hero bg-black paddings">
      <div className="relative">
        <nav className="text-white flex justify-between items-center py-5">
          <h1 className="">Faiz Ali</h1>
          <ul className="flex gap-5 items-center">
            {navItems.map((item, i) => {
              return (
                <li key={i} className=" after:content-none after:border-b-2 after:absolute border-rose-800 ">
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
            <li>
              <a href="">
                <button className="primary-btn">Contact</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
