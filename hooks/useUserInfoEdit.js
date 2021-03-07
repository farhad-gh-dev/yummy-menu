import { useState } from "react";

const useUserInfoEdit = (userData) => {
  const [userInfo, setUserInfo] = useState("test");

  const userInfoEditHandler = (newInfo) => {
    setUserInfo({
      ...userInfo,
      ...newInfo,
    });
  };

  const submitNewInfo = () => console.log("new info submitted...");
  const passwordResetHandler = () => console.log("password reset completed...");

  return {
    userInfo,
    userInfoEditHandler,
    submitNewInfo,
    passwordResetHandler,
  };
};

export default useUserInfoEdit;
