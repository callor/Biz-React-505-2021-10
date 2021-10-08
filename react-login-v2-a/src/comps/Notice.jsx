import { useUserContext } from "../context/UserContextProvider";

function Notice() {
  const { user } = useUserContext();

  return (
    <div>
      <h1>공지사항</h1>
      <h3>USERID : {user.userid}</h3>
    </div>
  );
}

export default Notice;
