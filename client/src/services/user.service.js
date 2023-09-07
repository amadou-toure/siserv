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
const getManager = async (id, setUser) => {
  const handleresult = async (data) => {
    setUser(data.data);
  };
  await fetch(`http://localhost:3000/api/users/${id}`, {
    method: "get",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};
const getAllUsers = async (setUsers) => {
  const handleresult = async (data) => {
    setUsers(data.data);
  };
  await fetch(`http://localhost:3000/api/users`, {
    method: "get",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};
const CreateUser = async (User, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(User);
  await fetch(`http://localhost:3000/api/users`, {
    method: "post",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(User),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};
export { getAllUsers, getUser, CreateUser, getManager };
