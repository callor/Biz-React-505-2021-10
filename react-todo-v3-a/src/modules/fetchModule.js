const fetchLogin = async ({ userid, password }) => {
  const fetchOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
    // body : {userid : userid, password : password}
    body: JSON.stringify({ userid, password }),
  };
  const response = await fetch("http://localhost/users/login", fetchOption);

  if (response.ok) {
    const resultUser = await response.json();
    return resultUser;
  }
};

export { fetchLogin };
