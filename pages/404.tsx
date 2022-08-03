import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 5000);
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        src="assets/404bg.png"
        alt=""
        className="absolute w-[100%] h-full object-cover -z-10 top-0"
      />
      <img
        src="assets/Profile.gif"
        alt=""
        className="flex  w-[200px] border-gray-400 border-4 top-[200px] "
      />
      <h1 className="font-[MinimalBold] hover:underline text-white text-[50px]">
        4<span className="text-gray-300">0</span>4 - Page Not Found
      </h1>
      <div className="font-[MinimalRecular] text-white px-10 pb-4">
        <h1 className="text-2xl ">Hmm..</h1>
        <p className="text-xl">
          The page you are looking for might have been removed had it's name
          changed or is temporarily unavailable
        </p>
      </div>
      <button className="p-4 bg-white hover:underline">
        <Link href={"/"}>
          <a>Homepage</a>
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
