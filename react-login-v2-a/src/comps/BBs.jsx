import { useUserContext } from "../context/UserContextProvider";

function BBs() {
  const { user } = useUserContext();

  return (
    <div>
      <h1>자유게시판</h1>
      <h3>USERID : {user.userid}</h3>
    </div>
  );
}

export default BBs;
