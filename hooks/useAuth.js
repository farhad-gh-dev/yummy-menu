import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
  const [userIsLogged, setUserIsLogged] = useState(true);

  useEffect(() => {
    const testFunction = async () => {
      try {
        const { data } = await axios.post("http://localhost:8000/auth/login", {
          email: "farhad@gmail.com",
          password: "521378farhaD",
        });

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);

  return {
    userIsLogged,
  };
};

export default useAuth;
