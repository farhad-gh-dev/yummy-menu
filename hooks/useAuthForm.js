import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import { signInValidation, singUpValidation } from "../utils/FormValidation";
import useError from "./useError";

const signInURL = "http://192.168.1.6:8000/auth/login";
const signUpURL = "http://192.168.1.6:8000/auth/register";

const useAuth = (initialValues = null) => {
  const [formData, setFromData] = useState(initialValues);
  const { errorObj, errorHandler } = useError();

  const formHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setFromData({
      ...formData,
      [inputName]: inputValue,
    });
  };

  const signInHandler = async (userInfo) => {
    if (errorObj.text) return;

    const { error } = signInValidation(userInfo);

    if (error) {
      errorHandler(error.message, "fail");
      return;
    }

    try {
      const { data } = await axios.post(signInURL, userInfo);

      localStorage.setItem("token", data.token);
      Router.push("/");
    } catch {
      errorHandler("Username or Password is Wrong.", "fail");
    }
  };

  const signUpHandler = async (userInfo) => {
    if (errorObj.text) return;

    const { error } = singUpValidation(userInfo);

    if (error) {
      errorHandler(error.message, "fail");
      return;
    }

    try {
      const { data } = await axios.post(signUpURL, userInfo);

      localStorage.setItem("token", data.token);
      Router.push("/");
    } catch (err) {
      errorHandler("registration failed.", "fail");
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
    authError: errorObj,
    formHandler,
    guestUser,
    signInHandler,
    signUpHandler,
  };
};

export default useAuth;
