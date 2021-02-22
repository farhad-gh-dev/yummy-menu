import Head from "next/head";
import useTokenCheckInApp from "../hooks/useTokenCheckInApp";
import useThemeMode from "../hooks/useThemeMode";

import Loading from "../components/Loading/Loading";
import Navbar from "../components/navbar/Navbar";

export default function User() {
  const { isLoading } = useTokenCheckInApp();
  const { themeIsDark, themeModeHandler } = useThemeMode();

  const logoutHandler = () => console.log("logged-out");

  if (isLoading) return <Loading />;
  return (
    <div className="user-page d-flex flex-column test-border">
      <Head>
        <title>Yummy Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        logoutHandler={logoutHandler}
        themeIsDark={themeIsDark}
        themeModeHandler={themeModeHandler}
      />

      <div className="d-flex flex-column flex-fill">
        <div className="flex-fill">profile</div>
        <div>buttons</div>
      </div>
    </div>
  );
}
