import Head from "next/head";
import useThemeMode from "../hooks/useThemeMode";

import Navbar from "../components/navbar/Navbar";
import TypeMenu from "../components/TypeMenu/TypeMenu";
import ItemsCards from "../components/ItemsCards/ItemCards";

export default function Home() {
  const { themeIsDark, themeModeHandler } = useThemeMode();

  const logoutHandler = () => {
    console.log("logged-out");
  };

  return (
    <div className="menu-page d-flex flex-column">
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

      <div className="menu-container d-flex flex-column flex-fill">
        <div className="flex-fill">
          <ItemsCards />
        </div>
        <div>
          <TypeMenu />
        </div>
      </div>
    </div>
  );
}
