import React, { useState } from "react";
import logo from "../../assets/Img/logo.png";
import e3 from "../../assets/Img/Ellipse 3.png";
import n1 from "../../assets/Img/NavI1.png";
import n2 from "../../assets/Img/Navi2.png";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingCart, HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="  w-full z-50 ">
      <div className=" bg-[#E3FFE1] container mx-auto px-4 md:px-0 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center px-3">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          {/* Desktop menu items */}
          <ul className="hidden md:flex ml-[85px] gap-5 text-[15px] font-Poppins">
            <li>
              <a href="#" className="flex items-center gap-2">
                SHOP <img src={e3} alt="dot" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                DELIVERY <img src={e3} alt="dot" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                BOXES <img src={e3} alt="dot" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                ABOUT <img src={e3} alt="dot" />
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-[10px] mr-[47px]">
          <button className="w-[37px] h-[37px] border border-[#1E403D] flex items-center justify-center rounded-full">
            <CiSearch size={20} />
          </button>
          <button className="w-[37px] h-[37px] border border-[#1E403D] flex items-center justify-center rounded-full">
            <img src={n1} alt="nav icon 1" />
          </button>
          <button className="w-[37px] h-[37px] border border-[#1E403D] flex items-center justify-center rounded-full">
            <img src={n2} alt="nav icon 2" />
          </button>
          <button className="w-[37px] h-[37px] border border-[#1E403D] flex items-center justify-center rounded-full">
            <HiOutlineShoppingCart size={20} />
          </button>
        </div>

        {/* Mobile hamburger icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-[#1E403D] focus:outline-none"
          >
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile off-canvas menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#E3FFE1] shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end items-center px-6 py-4 border-b border-gray-300">
          <button onClick={toggleMenu} aria-label="Close menu"
            className="text-[#1E403D] focus:outline-none" >
            <HiX size={28} />
          </button>
        </div>

        <ul className="flex flex-col mt-6 px-6 gap-6 font-Poppins text-[#1E403D] text-lg">
          <li>
            <a href="#" className="flex items-center gap-2" onClick={toggleMenu}>
              SHOP <img src={e3} alt="dot" />
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2" onClick={toggleMenu}>
              DELIVERY <img src={e3} alt="dot" />
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2" onClick={toggleMenu}>
              BOXES <img src={e3} alt="dot" />
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2" onClick={toggleMenu}>
              ABOUT <img src={e3} alt="dot" />
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay when menu open */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
