import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "@/styles";
import { navLinks } from "@/constants";
import { logo, menu, close, linkedin } from "@/assets";

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
      className={`lg:px-16 px-6 w-full flex items-center h-[60px] fixed top-0 z-20 ${!scrolled ? 'bg-transparent' : 'bg-primary'}`}
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
            <span className="md:block hidden">
              | &nbsp; Full Stack Developer
            </span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
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
          <li className="flex items-center">
            <a href="https://www.linkedin.com/in/yosef-hershberg-111975264/" target="_blank">
              <img src={linkedin} alt="" className="w-[2rem] h-[2rem] object-contain hover:scale-125 transition ease-in-out" />
            </a>
          </li>

        </ul>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-slate-700 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`
                    ${active === link.title ? "text-white" : "text-secondary"}
                    font-poppins font-medium hover:text-white cursor-pointer text-[16px]
                  `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle((prev) => !prev);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="flex items-center">
                <a href="https://www.linkedin.com/in/yosef-hershberg-111975264/" target="_blank" className="font-poppins font-medium text-secondary hover:text-white cursor-pointer text-[16px]">
                  LinkedIn
                </a>
                <img src={linkedin} alt="" className="w-[2rem] h-[2rem] object-contain pl-3" />
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
