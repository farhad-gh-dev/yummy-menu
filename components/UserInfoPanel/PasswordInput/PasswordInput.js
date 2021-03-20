import { useState } from "react";
import { validPassword } from "../../../utils/FormValidation";

import Alert from "../../Alerts/Alert";

export default function UserInfoInput({ passwordResetHandler, closeHandler }) {
  const [inputValues, setInputValues] = useState({
    password: "",
    newPassword: "",
    newPasswordRepeat: "",
  });

  const [inputError, setInputError] = useState("");

  const inputHandler = (e) =>
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });

  const errorHandler = (errorText) => {
    if (inputError) return;
    setInputError(errorText);
    setTimeout(() => {
      setInputError("");
    }, 3000);
  };

  const submitHandler = () => {
    const { password, newPassword, newPasswordRepeat } = inputValues;

    if (!password || !newPasswordRepeat || !newPasswordRepeat) {
      errorHandler(`Please complete all required fields.`);
      return;
    }

    if (password === newPassword) {
      errorHandler(
        `Please enter a different password from your current password`
      );
      return;
    }

    if (newPassword !== newPasswordRepeat) {
      errorHandler(`New Password Repeat is not the same as New Password`);
      return;
    }

    let error = null;

    for (const item of Object.keys(inputValues)) {
      error = validPassword(inputValues[item]);
      if (error) break;
    }

    if (error) {
      errorHandler(error.message);
      return;
    }

    passwordResetHandler({
      password,
      newPassword,
    });
    closeHandler();
  };

  return (
    <div className="user-info-input d-flex align-items-center justify-content-center">
      <Alert text={inputError} type="warning" />
      <div className="input-panel w-100">
        <input
          className="w-100"
          type="password"
          name="password"
          value={inputValues.password}
          placeholder="Enter Your Password"
          onChange={(e) => inputHandler(e)}
        />
        <input
          className="w-100"
          type="password"
          name="newPassword"
          value={inputValues.newPassword}
          placeholder="Enter Your New Password"
          onChange={(e) => inputHandler(e)}
        />
        <input
          className="w-100"
          type="password"
          name="newPasswordRepeat"
          value={inputValues.newPasswordRepeat}
          placeholder="Repeat Your New Password"
          onChange={(e) => inputHandler(e)}
        />
        <div className="buttons-container d-flex">
          <div>
            <button onClick={() => closeHandler(false)} className="red-bg">
              cancel
            </button>
          </div>
          <div>
            <button onClick={() => submitHandler()} className="blue-bg">
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
