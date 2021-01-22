import Head from "next/head";
import useThemeMode from "../hooks/useThemeMode";

import Navbar from "../components/navbar/Navbar";

export default function Home() {
  const { themeIsDark, themeModeHandler } = useThemeMode();

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
        logoutHandler={logoutHandler}
        themeIsDark={themeIsDark}
        themeModeHandler={themeModeHandler}
      />
    </div>
  );
}
