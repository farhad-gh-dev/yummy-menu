import { useState } from "react";

import UserInfoInput from "./UserInfoInput/UserInfoInput";
import PasswordInput from "./PasswordInput/PasswordInput";

export default function UserInfoPanel({
  userInfo,
  userInfoEditHandler,
  showPasswordPanel,
  passwordPanelHandler,
}) {
  const [activeInput, setActiveInput] = useState(null);

  const clearActiveInput = () => setActiveInput(null);

  return (
    <div className="user-info-panel">
      {activeInput ? (
        <UserInfoInput
          inputName={activeInput}
          prevValue={userInfo[activeInput]}
          userInfoEditHandler={userInfoEditHandler}
          closeHandler={clearActiveInput}
        />
      ) : null}
      {showPasswordPanel ? (
        <PasswordInput closeHandler={passwordPanelHandler} />
      ) : null}
      <div className="title text-cap text-weight-bold">your profile</div>
      <div className="info-cards-container">
        {Object.keys(userInfo).map((item, index, arr) => {
          return (
            <div
              key={item}
              className={`info-card p-relative${
                index === arr.length - 1 ? " last" : ""
              }`}
            >
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
      </div>
    </div>
  );
}
