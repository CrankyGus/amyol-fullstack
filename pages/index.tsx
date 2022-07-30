import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Amyol - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<img
        src="assets/bg.jpeg"
        alt=""
        className="absolute w-[100%] h-full object-cover -z-10 top-0"
      />*/}
    </div>
  );
};

export default Home;
