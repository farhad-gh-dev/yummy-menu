import { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

const passwordResetURI = "http://localhost:8000/auth/password-reset";
const userInfoEditURI = "http://localhost:8000/auth/user";
const deleteUserURI = "http://localhost:8000/auth/user";

const useUserInfoEdit = () => {
  const [prevUserInfo, setPrevUserInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [submitMessage, setSubmitMessage] = useState({ text: "", type: "" });

  const userInfoEditHandler = (newInfo) => {
    setUserInfo({
      ...userInfo,
      ...newInfo,
    });
  };

  const messageHandler = (text, type) => {
    setSubmitMessage({
      text,
      type,
    });
    setTimeout(() => {
      setSubmitMessage({ text: "", type: "" });
    }, 3000);
  };

  const submitNewInfo = async () => {
    if (userInfo === prevUserInfo) {
      messageHandler("not any of your information was changed", "warning");
      return;
    }

    const newUserInfo = Object.keys(userInfo).reduce((Obj, item) => {
      if (userInfo[item] !== prevUserInfo[item]) {
        Obj[item] = userInfo[item];
      }
      return Obj;
    }, {});

    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.put(userInfoEditURI, newUserInfo, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      messageHandler("your information updated successfully", "success");
    } catch (err) {
      messageHandler("information update failed", "fail");
    }
  };

  const passwordResetHandler = async (passwords) => {
    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.post(passwordResetURI, passwords, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      messageHandler(data.message, "success");
    } catch (err) {
      messageHandler("password reset failed", "fail");
    }
  };

  const deleteUserHandler = async () => {
    if (
      confirm(
        "Your Account Will be Permanently Deleted, Do You Want to Continue?"
      )
    ) {
      const token = localStorage.getItem("token");

      try {
        const { data } = await axios.delete(deleteUserURI, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        messageHandler("your account has been deleted successfully", "success");
        setTimeout(() => {
          localStorage.removeItem("token");
          Router.push("/sign-up");
        }, 2000);
      } catch (err) {
        messageHandler("account deletion failed", "fail");
      }
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const token = localStorage.getItem("token");
      const tokenCheckURL = "http://localhost:8000/auth/user";

      try {
        const { data } = await axios.get(tokenCheckURL, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        setPrevUserInfo(data);
        setUserInfo(data);
      } catch {
        console.log("Error...");
      }
    };

    getUserInfo();
  }, []);

  return {
    userInfo,
    submitMessage,
    userInfoEditHandler,
    submitNewInfo,
    passwordResetHandler,
    deleteUserHandler,
  };
};

export default useUserInfoEdit;
