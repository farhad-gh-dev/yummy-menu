import { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import useError from "./useError";

const tokenCheckURL = "http://192.168.1.6:8000/auth/user";
const passwordResetURI = "http://192.168.1.6:8000/auth/password-reset";
const userInfoEditURI = "http://192.168.1.6:8000/auth/user";
const deleteUserURI = "http://192.168.1.6:8000/auth/user";

const useUserInfoEdit = () => {
  const [prevUserInfo, setPrevUserInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const { errorObj, errorHandler } = useError();

  const userInfoEditHandler = (newInfo) => {
    setUserInfo({
      ...userInfo,
      ...newInfo,
    });
  };

  const submitNewInfo = async () => {
    if (userInfo === prevUserInfo) {
      errorHandler("not any of your information was changed", "warning");
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

      setPrevUserInfo(userInfo);
      errorHandler("your information updated successfully", "success");
    } catch (err) {
      errorHandler("information update failed", "fail");
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

      errorHandler(data.message, "success");
    } catch (err) {
      errorHandler("password reset failed", "fail");
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

        errorHandler("your account has been deleted successfully", "success");
        setTimeout(() => {
          localStorage.removeItem("token");
          Router.push("/sign-up");
        }, 2000);
      } catch (err) {
        errorHandler("account deletion failed", "fail");
      }
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const token = localStorage.getItem("token");

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
    submitMessage: errorObj,
    userInfoEditHandler,
    submitNewInfo,
    passwordResetHandler,
    deleteUserHandler,
  };
};

export default useUserInfoEdit;
