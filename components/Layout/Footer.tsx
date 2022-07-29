import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white text-black font-[MinimalRecular] space-x-1 h-12 flex  justify-center items-center ">
      <h3>
        © 2022 by <span className="font-[MinimalBold]">AMYOL</span> DEV.
      </h3>
      <div className="px-6 space-x-4 hidden md:flex">
        <p>|</p>
        <Link href="/">
          <a className="hover:underline hover:underline-offset-4 ">Work</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hover:underline-offset-4">Gallery</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hover:underline-offset-4">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
