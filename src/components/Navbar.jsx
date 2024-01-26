import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks, contacts } from "../constants";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full
        flex
        items-center
        py-5
        fixed
        top-0
        z-20
        bg-primary
      `}
    >
      <div
        className="
          w-full 
          flex 
          items-center 
          max-w-7xl 
          justify-between 
          mx-auto
        "
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Anatoly<span className="sm:block hidden ml-1"> | Boronilov</span>
          </p>
        </Link>
        <div className="flex items-center ml-12 md:ml-0 gap-x-4 md:gap-x-8 justify-between">
          {contacts.map((item) => (
            <div
              key={item.name}
              className="cursor-pointer transition duration-300 hover:opacity-70 "
            >
              <a href={`${item.href}`} target="_blank">
                <img 
                  alt={item.name}
                  src={item.icon}
                  className="w-6 h-6 group-even:w-14 group-even:h-14"
                />
              </a>
            </div>
          ))}
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`
                ${active === item.title ? "text-white" : "text-secondary"}
                hover:text-white
                text-[18px]
                font-medium
                cursor-pointer
                transition
                duration-300
              `}
              onClick={() => setActive(item.title)}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`
            ${toggle ? "flex" : "hidden"}
            p-6
            black-gradient
            absolute
            top-20
            right-0
            mx-4
            my-2
            min-w-[140px]
            z-10
            rounded-xl
          `}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`
                ${active === item.title ? "text-white" : "text-secondary"}
                font-poppins
                font-medium
                cursor-pointer
                text-[16px]
              `}
                  onClick={() => {
                    setToggle((prev) => !prev);
                    setActive(item.title);
                  }}
                >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
