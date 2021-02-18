import { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import { route } from "next/dist/next-server/server/router";

const useAuth = (initialValues = null) => {
  const [userIsLogged, setUserIsLogged] = useState(true);
  const [formData, setFromData] = useState(initialValues);
  const [authError, setAuthError] = useState(false);
  const [userData, setUserData] = useState(null);

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

  const userLogStatus = async (token) => {
    try {
      const { data } = await axios.get("http://localhost:8000/auth/user", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      Router.push("/");
    } catch {
      errorHandler();
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem("token");

    if (!localToken) return;

    userLogStatus(localToken);

    // const testFunction = async () => {
    //   try {
    //     const { data } = await axios.post("http://localhost:8000/auth/login", {
    //       email: "farhad@gmail.com",
    //       password: "521378farhaD",
    //     });

    //     console.log(data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
  }, []);

  return {
    formData,
    formHandler,
    guestUser,
    signInHandler,
  };
};

export default useAuth;
