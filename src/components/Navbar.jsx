import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "@/styles";
import { navLinks } from "@/constants";
import { logo, menu, close } from "@/assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScroled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScroled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center h-[60px] fixed top-0 z-20 ${!scrolled ? 'bg-transparent' : 'bg-primary'}`}
    >
      <div className="w-full flex justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-[4rem] h-[4rem] object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Yosef Hershberg &nbsp;
            <span className="sm:block hidden">
              | &nbsp; Front end developer
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
                ${active === link.title ? "text-white" : "text-secondary"}
                hover:text-white text-[18px] font-medium curser-pointer flex items-center
              `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
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
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`
                    ${active === link.title ? "text-white" : "text-secondary"}
                    font-poppins font-medium cursor-pointer text-[16px]
                  `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle((prev) => !prev);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
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
