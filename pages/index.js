import Head from "next/head";

import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="menu-page light-mode">
      <Head>
        <title>Yummy Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar logo_img_src="/logo/logo-light.svg" />
    </div>
  );
}
