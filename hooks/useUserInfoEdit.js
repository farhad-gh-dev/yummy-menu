import { useState } from "react";

const useUserInfoEdit = () => {
  const [newUserInfo, setNewUserInfo] = useState(null);

  const userInfoEditHandler = (newInfo) => {
    setNewUserInfo({
      ...newUserInfo,
      ...newInfo,
    });
  };

  const submitNewInfo = () => console.log("new info submitted...");
  const passwordResetHandler = () => console.log("password reset completed...");

  return {
    userInfoEditHandler,
    submitNewInfo,
    passwordResetHandler,
  };
};

export default useUserInfoEdit;
