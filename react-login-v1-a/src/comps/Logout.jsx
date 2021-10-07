import React, { useEffect } from "react";
import UserContextProvider, {
  useUserContext,
} from "../context/UserContextProvider";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();
  const { setUser } = useUserContext();
  useEffect(() => {
    const logout = async () => {
      const res = await fetch("http://localhost:8080/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        credentials: "include",
      });

      await setUser([]);
      history.replace("/");
    };
    logout();
  }, []);
  return <div></div>;
}

export default Logout;
