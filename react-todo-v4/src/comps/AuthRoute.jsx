import { useUserContext } from "../context";
import { useHistory } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { fetchUser } from "../modules/fetchModule";

function AuthRoute({ children }) {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  const fetchCallback = useCallback(async () => {
    const resultUser = await fetchUser();
    if (!resultUser?.userid) {
      history.replace("/login");
    }
    setUser(resultUser);
    // if (!user?.userid) {
    //   history.replace("/login");
    // }
  }, [history, setUser]);
  useEffect(fetchCallback, [fetchCallback]);
  return <>{children}</>;
}

export default AuthRoute;
