import { useState } from "react";
import Head from "next/head";
import useTokenCheckInApp from "../hooks/useTokenCheckInApp";
import useThemeMode from "../hooks/useThemeMode";

import Loading from "../components/Loading/Loading";
import Navbar from "../components/navbar/Navbar";
import UserInfoPanel from "../components/UserInfoPanel/UserInfoPanel";

export default function User() {
  const { isLoading } = useTokenCheckInApp();
  const { themeIsDark, themeModeHandler } = useThemeMode();
  const [userInfo, setUserInfo] = useState({
    email_address: "alexmiller@gmail.com",
    username: "alex miller",
    phone_number: "+9113412044",
    address: ["1420  Pine Garden Lane", "3608  Park Avenue"],
  });

  const userInfoEditHandler = (newInfo) => {
    setUserInfo({
      ...userInfo,
      ...newInfo,
    });
  };

  const logoutHandler = () => console.log("logged-out");

  if (isLoading) return <Loading />;
  return (
    <div className="user-page d-flex flex-column">
      <Head>
        <title>Yummy Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        logoutHandler={logoutHandler}
        themeIsDark={themeIsDark}
        themeModeHandler={themeModeHandler}
      />

      <div className="section-container d-flex flex-column flex-fill">
        <div className="flex-fill">
          <UserInfoPanel
            userInfo={userInfo}
            userInfoEditHandler={userInfoEditHandler}
          />
        </div>
        <div className="buttons-container">
          <button
            className="password-reset-btn text-cap text-weight-bold"
            onClick={() => console.log("password changed")}
          >
            change password
          </button>
          <button
            className="save-btn text-cap text-weight-bold"
            onClick={() => console.log("saved changes")}
          >
            save changes
          </button>
        </div>
      </div>
    </div>
  );
}
