const fetchLogin = async (userid, password) => {
  const response = await fetch("http://localhost:8080/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
    body: JSON.stringify({
      userid,
      password,
    }),
  });

  if (response?.ok) {
    const resultUser = response.json();
    console.log("result", resultUser);
    return resultUser;
  } else {
    return [];
  }
};

const fetchJoin = async (joinData) => {
  const response = await fetch("http://localhost:8080/users/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joinData),
  });

  if (response.ok) {
    const result = await response.json();
    return result;
  }
};

const fetchUser = async () => {
  const response = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
  });
  return response.json();
};

const fetchLogout = async () => {
  const response = await fetch("http://localhost:8080/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
  });
  return response.json();
};

export { fetchJoin, fetchLogin, fetchUser, fetchLogout };
