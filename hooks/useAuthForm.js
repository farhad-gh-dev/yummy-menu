import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import { signInValidation, singUpValidation } from "../utils/FormValidation";

const useAuth = (initialValues = null) => {
  const [formData, setFromData] = useState(initialValues);
  const [ErrorMessage, setErrorMessage] = useState("");

  const formHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setFromData({
      ...formData,
      [inputName]: inputValue,
    });
  };

  const errorHandler = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
  };

  const signInHandler = async (userInfo) => {
    if (ErrorMessage) return;

    const { error } = signInValidation(userInfo);

    if (error) {
      errorHandler(error.message);
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/login",
        userInfo
      );

      localStorage.setItem("token", data.token);
      Router.push("/");
    } catch {
      errorHandler("Username or Password is Wrong.");
    }
  };

  const singUpHandler = async (userInfo) => {
    if (ErrorMessage) return;

    const { error } = singUpValidation(userInfo);

    if (error) {
      errorHandler(error.message);
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/register",
        userInfo
      );

      localStorage.setItem("token", data.token);
      Router.push("/");
    } catch (err) {
      console.log(JSON.stringify(err));
      errorHandler("registration failed.");
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
    ErrorMessage,
    formHandler,
    guestUser,
    signInHandler,
    singUpHandler,
  };
};

export default useAuth;
