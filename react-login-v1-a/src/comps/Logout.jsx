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
      await setUser([]);
      history.replace("/");
    };
    logout();
  }, []);
  return <div></div>;
}

export default Logout;
