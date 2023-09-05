const getUser = async (setUser) => {
  const handleresult = async (data) => {
    setUser(data.data);
  };
  await fetch(
    `http://localhost:3000/api/users/${localStorage.getItem("user")}`,
    {
      method: "get",
      headers: {
        authorization: localStorage.getItem("token"),
        "content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

export default getUser;
