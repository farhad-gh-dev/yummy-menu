import { useState } from "react";
import Head from "next/head";

import Navbar from "../components/navbar/Navbar";

export default function Home() {
  const [themeIsLight, setThemeIsLight] = useState(true);

  const themeModeHandler = () => {
    setThemeIsLight(!themeIsLight);
  };

  const logoutHandler = () => {
    console.log("logged-out");
  };

  return (
    <div className="menu-page light-mode">
      <Head>
        <title>Yummy Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        ordersNumber={5}
        logoutHandler={() => logoutHandler()}
        themeMode={themeIsLight ? "light" : "dark"}
        themeModeHandler={() => themeModeHandler()}
      />
    </div>
  );
}
