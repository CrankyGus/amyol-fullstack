import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="font-[MinimalBold] text-white text-3xl bg-transparent flex relative justify-between items-center px-16 pt-5 z-50 md:px-24  top-0 ">
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
          className="border-4 border-white hover:border-gray-400 hover:scale-125 transition-colors duration-200"
        />
      </div>
    </>
  );
};

export default Navbar;
