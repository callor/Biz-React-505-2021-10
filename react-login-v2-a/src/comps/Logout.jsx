import React, { useEffect, useCallback } from "react";
import { useUserContext } from "../context/UserContextProvider";
import { useHistory } from "react-router-dom";
import { fetchLogout } from "../modules/fetchMoudle";

function Logout() {
  const history = useHistory();
  const { setUser } = useUserContext();

  // user state 정보가 정말 로그인한 정상사용자 인지 ??
  const fetchCb = useCallback(async () => {
    await fetchLogout();
    await setUser([]);
    history.replace("/");
  }, [setUser]);

  // 페이지가 열리려고 시도되면 자동으로 실행하도록
  useEffect(fetchCb, [fetchCb]);

  return <div></div>;
}

export default Logout;
