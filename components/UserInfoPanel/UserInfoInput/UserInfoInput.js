import { useState } from "react";

export default function UserInfoInput({
  inputName,
  prevValue,
  userInfoEditHandler,
  closeHandler,
}) {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = () => {
    const submitSuccess = userInfoEditHandler(inputName, inputValue, prevValue);
    if (submitSuccess) closeHandler();
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="user-info-input z-index-l2 d-flex align-items-center justify-content-center">
      <div className="input-panel w-100">
        <input
          className="w-100"
          type="text"
          name={inputName}
          value={inputValue}
          placeholder={`New ${inputName.replace(/_/g, " ")}`}
          onChange={(e) => inputHandler(e)}
          onKeyDown={(e) => e.key === "Enter" && submitHandler()}
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
