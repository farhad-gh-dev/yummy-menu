import { useState } from "react";

import UserInfoInput from "./UserInfoInput/UserInfoInput";

export default function UserInfoPanel({ userInfo, userInfoEditHandler }) {
  const [activeInput, setActiveInput] = useState(null);

  const clearActiveInput = () => setActiveInput(null);

  return (
    <div className="user-info-panel">
      {activeInput ? (
        <UserInfoInput
          inputName={activeInput}
          prevValue={userInfo[activeInput]}
          closeHandler={clearActiveInput}
          userInfoEditHandler={userInfoEditHandler}
        />
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
                {item.replace("_", " ")}
              </div>
              {Array.isArray(userInfo[item]) ? (
                userInfo[item].map((d) => {
                  return (
                    <div key={d} className="card-description multiple text-cap">
                      {d}
                    </div>
                  );
                })
              ) : (
                <div className="card-description text-cap text-weight-bold">
                  {userInfo[item]}
                </div>
              )}

              {item !== "email_address" && (
                <button
                  className="edit-btn text-cap p-absolute from-top from-right"
                  onClick={() => setActiveInput(item)}
                >
                  edit
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
