import { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

const tokenCheckURL = "http://localhost:8000/auth/user";

const useTokenCheckInApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const checkToken = async (token) => {
    if (!token) {
      Router.push("/sign-in");
      return;
    }

    try {
      const { data } = await axios.get(tokenCheckURL, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setUserInfo(data);
      setIsLoading(false);
    } catch {
      localStorage.removeItem("token");
      Router.push("/sign-in");
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    checkToken(localToken);
  }, []);

  return {
    isLoading,
    userInfo,
  };
};

export default useTokenCheckInApp;
