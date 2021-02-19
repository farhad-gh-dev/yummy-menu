import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import formValidation from "../utils/FormValidation";

const useAuth = (initialValues = null) => {
  const [formData, setFromData] = useState(initialValues);
  const [authError, setAuthError] = useState({});

  const formHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setFromData({
      ...formData,
      [inputName]:
        inputName === "password" ? inputValue : inputValue.toLowerCase(),
    });
  };

  const errorHandler = () => {
    setAuthError(true);
    setTimeout(() => {
      setAuthError(false);
    }, 3000);
  };

  const signInHandler = async (userInfo) => {
    const { error } = formValidation(userInfo);

    if (!error) console.log("no error");
    return;

    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/login",
        userInfo
      );

      localStorage.setItem("token", data.token);
      Router.push("/");
    } catch {
      errorHandler();
    }
  };

  const guestUser = () => {
    const guestUserInfo = {
      username: "guest-user",
      password: "yummy-guest",
    };

    signInHandler(guestUserInfo);
  };

  return {
    formData,
    formHandler,
    guestUser,
    signInHandler,
  };
};

export default useAuth;
