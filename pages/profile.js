import { useState } from "react";
import Head from "next/head";
import useTokenCheckInApp from "../hooks/useTokenCheckInApp";
import useThemeMode from "../hooks/useThemeMode";
import useLogOut from "../hooks/useLogOut";
import useUserInfoEdit from "../hooks/useUserInfoEdit";

import Loading from "../components/Loading/Loading";
import Navbar from "../components/navbar/Navbar";
import UserInfoPanel from "../components/UserInfoPanel/UserInfoPanel";
import ErrorPanel from "../components/Errors/ErrorPanel";

export default function Profile() {
  const { isLoading } = useTokenCheckInApp();
  const { themeIsDark, themeModeHandler } = useThemeMode();
  const { logoutHandler } = useLogOut();
  const {
    userInfo,
    submitMessage,
    userInfoEditHandler,
    submitNewInfo,
    passwordResetHandler,
    deleteUserHandler,
  } = useUserInfoEdit();

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

      <ErrorPanel text={submitMessage.text} type={submitMessage.type} />
      <div className="section-container d-flex flex-column flex-fill">
        <div className="flex-fill">
          {userInfo ? (
            <UserInfoPanel
              userInfo={userInfo}
              userInfoEditHandler={userInfoEditHandler}
              submitNewInfo={submitNewInfo}
              passwordResetHandler={passwordResetHandler}
            />
          ) : (
            <Loading />
          )}
        </div>
        <div className="submit-buttons">
          <button
            className="password-reset-btn text-cap text-weight-bold"
            onClick={() => deleteUserHandler()}
          >
            delete account
          </button>
          <button
            className="save-btn text-cap text-weight-bold"
            onClick={() => submitNewInfo()}
          >
            save changes
          </button>
        </div>
      </div>
    </div>
  );
}
