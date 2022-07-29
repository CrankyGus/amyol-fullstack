import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navMenu;
  let navHamburgerMenu;

  navMenu = (
    <div className="hidden  md:flex  text-xl">
      <Link href={"/"}>
        <a className={isScroll ? "hoverBtnScroll" : "hoverBtn"}>WORK</a>
      </Link>
      <Link href={"/"}>
        <a className={isScroll ? "hoverBtnScroll" : "hoverBtn"}>GALLERY</a>
      </Link>
      <Link href={"/"}>
        <a className={isScroll ? "hoverBtnScroll" : "hoverBtn"}>CONTACT</a>
      </Link>
    </div>
  );

  navHamburgerMenu = (
    <div className="flex flex-col  w-full md:hidden  text-xl ">
      <Link href={"/"}>
        <a className={isScroll ? "hoverBtnScrollHam" : "hoverBtnHam"}>WORK</a>
      </Link>
      <Link href={"/"}>
        <a className={isScroll ? "hoverBtnScrollHam" : "hoverBtnHam"}>
          GALLERY
        </a>
      </Link>
      <Link href={"/"}>
        <a className={isScroll ? "hoverBtnScrollHam" : "hoverBtnHam"}>
          CONTACT
        </a>
      </Link>
    </div>
  );
  return (
    <>
      <div
        className={
          isScroll
            ? "font-[MinimalBold] text-black text-3xl bg-white flex fixed w-full h-24 justify-between items-center px-16 py-5 z-50 md:px-24  top-0"
            : "font-[MinimalBold] text-white text-3xl bg-transparent flex absolute w-full h-24 justify-between items-center px-16 py-5 z-50 md:px-24  top-0 "
        }
      >
        <Link href={"/"}>
          <a>AMYOL</a>
        </Link>
        {navMenu}
        <div className="flex space-x-2">
          <img
            src={
              isScroll
                ? "/assets/profileGithub.png"
                : "/assets/profileWhite.png"
            }
            alt="Profile"
            width={40}
            height={40}
            className={
              isScroll
                ? " hidden md:flex hover:border-4 border-gray-600 hover:border-gray-400 hover:scale-125 transition-colors duration-200"
                : "border-4 hidden md:flex border-gray-600 hover:border-gray-400 hover:scale-125 transition-colors duration-200"
            }
          />
          {isOpen ? (
            <button
              className="md:hidden hover:scale-110 transition-transform duration-200"
              onClick={handleMenu}
            >
              <IoClose />
            </button>
          ) : (
            <button
              className="md:hidden hover:scale-110 transition-transform duration-200"
              onClick={handleMenu}
            >
              <FaBars />
            </button>
          )}
        </div>
      </div>
      {isOpen ? (
        <div
          className={
            isScroll
              ? "font-[MinimalBold] text-black  text-3xl bg-white flex fixed w-full  justify-center items-center  top-[95px] pb-10  md:px-24  "
              : "font-[MinimalBold] text-white text-3xl bg-transparent flex absolute w-full  justify-center items-center  top-[95px]  md:px-24   "
          }
        >
          {navHamburgerMenu}
        </div>
      ) : (
        <div></div>
      )}

      {/*

        <div className="font-[MinimalBold] text-white text-3xl bg-transparent flex absolute w-full justify-between items-center px-16 py-5 z-50 md:px-24  top-0 ">
          <Link href={"/"}>
            <a>AMYOL</a>
          </Link>
          <div className="hidden md:flex  text-xl">
            <Link href={"/"}>
              <a className="hoverBtn">WORK</a>
            </Link>
            <Link href={"/"}>
              <a className="hoverBtn">GALLERY</a>
            </Link>
            <Link href={"/"}>
              <a className="hoverBtn">CONTACT</a>
            </Link>
          </div>
          <img
            src="/assets/profile.png"
            alt="Profile"
            width={40}
            height={40}
            className="hover:border-4 border-gray-600 hover:border-gray-400 hover:scale-125 transition-colors duration-200"
          />
        </div>*/}
    </>
  );
};

export default Navbar;
