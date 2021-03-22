import { useState } from "react";

export default function UserInfoInput({
  inputName,
  prevValue,
  userInfoEditHandler,
  closeHandler,
}) {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => setInputValue(e.target.value);

  const submitHandler = () => {
    const submitSuccess = userInfoEditHandler(inputName, inputValue, prevValue);
    if (submitSuccess) closeHandler();
  };

  return (
    <div className="user-info-input d-flex align-items-center justify-content-center">
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
