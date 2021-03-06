import { useState } from "react";
import {
  validUsername,
  validAddress,
  validPhoneNumber,
} from "../../../utils/FormValidation";

import ErrorPanel from "../../Errors/ErrorPanel";

export default function UserInfoInput({ userInfoEditHandler, closeHandler }) {
  const [inputValue, setInputValue] = useState({
    prevPassword: "",
    newPassword: "",
    newPasswordRepeat: "",
  });
  const [inputError, setInputError] = useState("");

  const inputHandler = (e) =>
    setInputValue({
      ...inputValue,
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
    if (!inputValue || inputValue === prevValue) {
      errorHandler(`new ${inputName.replace(/_/g, " ")} is required.`);
      return;
    }

    if (inputName === "username") {
      const error = validUsername(inputValue);
      if (error) {
        errorHandler(error.message);
        return;
      }
    }

    if (inputName === "phone_number") {
      const error = validPhoneNumber(inputValue);
      if (error) {
        errorHandler(error.message);
        return;
      }
    }

    if (inputName === "address") {
      const error = validAddress(inputValue);
      if (error) {
        errorHandler(error.message);
        return;
      }
    }

    userInfoEditHandler({ [inputName]: inputValue });
    closeHandler();
  };

  return (
    <div className="user-info-input d-flex align-items-center justify-content-center">
      <ErrorPanel text={inputError} type="warning" />
      <div className="input-panel w-100">
        <input
          className="w-100"
          type="password"
          name="prevPassword"
          value={inputValue.prevPassword}
          placeholder="Enter Your Password"
          onChange={(e) => inputHandler(e)}
        />
        <input
          className="w-100"
          type="password"
          name="newPassword"
          value={inputValue.newPassword}
          placeholder="Enter Your New Password"
          onChange={(e) => inputHandler(e)}
        />
        <input
          className="w-100"
          type="password"
          name="newPasswordRepeat"
          value={inputValue.newPasswordRepeat}
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
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
