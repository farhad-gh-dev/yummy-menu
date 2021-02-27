import { useState } from "react";
import {
  validUsername,
  validEmail,
  validPhoneNumber,
} from "../../../utils/FormValidation";

import ErrorPanel from "../../Errors/ErrorPanel";

export default function UserInfoInput({
  inputName,
  prevValue,
  closeHandler,
  userInfoEditHandler,
}) {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const inputHandler = (e) => setInputValue(e.target.value);

  const errorHandler = (errorText) => {
    setInputError(errorText);
    setTimeout(() => {
      setInputError("");
    }, 3000);
  };

  const submitHandler = () => {
    if (!inputValue || inputValue === prevValue) {
      errorHandler(`new ${inputName.replace("_", " ")} is required.`);
      return;
    }

    if (inputName === "username") {
      const error = validUsername(inputValue);
      if (error) {
        errorHandler(error.message);
        return;
      }
    }

    if (inputName === "email_address") {
      const error = validEmail(inputValue);
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

    userInfoEditHandler({ [inputName]: inputValue });
  };

  return (
    <div className="user-info-input d-flex flex-column align-items-center justify-content-center">
      <ErrorPanel text={inputError} type="warning" />
      <div className="test-margin-y">{inputName.replace("_", " ")}</div>
      <input
        style={{ width: "100%", padding: "10px 15px" }}
        type={inputName !== "email" ? "string" : "email"}
        name={inputName}
        value={inputValue}
        placeholder={`New ${inputName.replace("_", " ")}`}
        onChange={(e) => inputHandler(e)}
      />
      <div className="test-margin-y">
        <button
          onClick={() => closeHandler()}
          style={{
            backgroundColor: "tomato",
            padding: "8px 12px",
            color: "#ffffff",
          }}
          className="test-margin-x"
        >
          close
        </button>
        <button
          onClick={() => submitHandler()}
          style={{
            backgroundColor: "#336CBC",
            padding: "8px 12px",
            color: "#ffffff",
          }}
          className="test-margin-x"
        >
          edit
        </button>
      </div>
    </div>
  );
}
