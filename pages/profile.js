import { useState } from "react";
import Head from "next/head";
import useTokenCheckInApp from "../hooks/useTokenCheckInApp";
import useThemeMode from "../hooks/useThemeMode";
import useLogOut from "../hooks/useLogOut";
import useUserInfoEdit from "../hooks/useUserInfoEdit";

import Loading from "../components/Loading/Loading";
import Navbar from "../components/navbar/Navbar";
import UserInfoPanel from "../components/UserInfoPanel/UserInfoPanel";

export default function Profile() {
  const { isLoading, userInfo } = useTokenCheckInApp();
  const { themeIsDark, themeModeHandler } = useThemeMode();
  const { logoutHandler } = useLogOut();
  const {
    userInfoEditHandler,
    submitNewInfo,
    passwordResetHandler,
  } = useUserInfoEdit();

  const [showPasswordPanel, setShowPasswordPanel] = useState(false);
  const passwordPanelHandler = (b) => setShowPasswordPanel(b);

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
            showPasswordPanel={showPasswordPanel}
            passwordPanelHandler={passwordPanelHandler}
          />
        </div>
        <div className="submit-buttons">
          <button
            className="password-reset-btn text-cap text-weight-bold"
            onClick={() => passwordPanelHandler(true)}
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
