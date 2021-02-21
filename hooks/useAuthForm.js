import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import { signInValidation, singUpValidation } from "../utils/FormValidation";

const signInURL = "http://localhost:8000/auth/login";
const signUpURL = "http://localhost:8000/auth/register";

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
      const { data } = await axios.post(signInURL, userInfo);

      localStorage.setItem("token", data.token);
      Router.push("/");
    } catch {
      errorHandler("Username or Password is Wrong.");
    }
  };

  const signUpHandler = async (userInfo) => {
    if (ErrorMessage) return;

    const { error } = singUpValidation(userInfo);

    if (error) {
      errorHandler(error.message);
      return;
    }

    try {
      const { data } = await axios.post(signUpURL, userInfo);

      localStorage.setItem("token", data.token);
      Router.push("/");
    } catch (err) {
      console.log(JSON.stringify(err));
      errorHandler("registration failed.");
    }
  };

  const guestUser = () => {
    const guestUserInfo = {
      usernameOrEmail: "guest-user",
      password: "Guest-user1",
    };

    signInHandler(guestUserInfo);
  };

  return {
    formData,
    ErrorMessage,
    formHandler,
    guestUser,
    signInHandler,
    signUpHandler,
  };
};

export default useAuth;
