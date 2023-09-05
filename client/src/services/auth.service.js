import { Navigate } from "react-router-dom";

const login = async (credentials, setResult) => {
  const handleresult = async (data) => {
    const Data = await data;
    if (Data.code === 200) {
      setResult("o");
      localStorage.setItem("token", Data.data.token);
      localStorage.setItem("user", Data.data.userId);
    } else if (Data.code === 404) {
      setResult(Data.message);
    } else {
      setResult(Data.message);
    }
  };
  console.log(credentials);
  await fetch("http://localhost:3000/api/login", {
    method: "post",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

export default login;
