import { useState } from "react";

import UserInfoInput from "./UserInfoInput/UserInfoInput";
import PasswordInput from "./PasswordInput/PasswordInput";

export default function UserInfoPanel({
  userInfo,
  userInfoEditHandler,
  passwordResetHandler,
}) {
  const [activeInput, setActiveInput] = useState(null);

  const clearActiveInput = () => setActiveInput(null);

  return (
    <div className="user-info-panel">
      {activeInput && activeInput !== "password" ? (
        <UserInfoInput
          inputName={activeInput}
          prevValue={userInfo[activeInput]}
          userInfoEditHandler={userInfoEditHandler}
          closeHandler={clearActiveInput}
        />
      ) : null}
      {activeInput === "password" ? (
        <PasswordInput
          closeHandler={clearActiveInput}
          passwordResetHandler={passwordResetHandler}
        />
      ) : null}
      <div className="title text-cap text-weight-bold">your profile</div>
      <div className="info-cards-container">
        {Object.keys(userInfo).map((item, arr) => {
          return (
            <div key={item} className="info-card p-relative">
              <div className="card-title text-cap">
                {item.replace(/_/g, " ")}
              </div>

              <div className="card-description text-cap text-weight-bold">
                {userInfo[item]
                  ? userInfo[item]
                  : `No ${item.replace(/_/g, " ")}`}
              </div>

              {item !== "email" && item !== "role" ? (
                <button
                  className="edit-btn text-cap p-absolute from-top from-right"
                  onClick={() => setActiveInput(item)}
                >
                  {userInfo[item] ? "edit" : "add"}
                </button>
              ) : null}
            </div>
          );
        })}
        <div className="info-card p-relative last">
          <div
            className="card-title text-cap"
            onClick={() => setActiveInput("password")}
          >
            change password
          </div>
        </div>
      </div>
    </div>
  );
}
