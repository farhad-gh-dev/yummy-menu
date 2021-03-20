import { useState } from "react";
import {
  validUsername,
  validAddress,
  validPhoneNumber,
} from "../../../utils/FormValidation";

import Alert from "../../Alerts/Alert";

export default function UserInfoInput({
  inputName,
  prevValue,
  userInfoEditHandler,
  closeHandler,
}) {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const inputHandler = (e) => setInputValue(e.target.value);

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
      <Alert text={inputError} type="warning" />
      <div className="input-panel w-100">
        <input
          className="w-100"
          type={inputName !== "email" ? "string" : "email"}
          name={inputName}
          value={inputValue}
          placeholder={`New ${inputName.replace(/_/g, " ")}`}
          onChange={(e) => inputHandler(e)}
        />
        <div className="buttons-container d-flex">
          <div>
            <button onClick={() => closeHandler()} className="red-bg">
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
