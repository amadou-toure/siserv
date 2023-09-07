const getRole = async (_id, setRole) => {
  const handleresult = async (data) => {
    setRole(data.data);
  };
  await fetch(`http://localhost:3000/api/role/${_id}`, {
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
const getAllRole = async (setRole) => {
  const handleresult = async (data) => {
    setRole(data.data);
  };
  await fetch(`http://localhost:3000/api/role`, {
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
const CreateRole = async (Role, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(Role);
  await fetch(`http://localhost:3000/api/role`, {
    method: "post",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Role),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const UpdateRole = async (id, Role, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(id);
  await fetch(`http://localhost:3000/api/role/${id}`, {
    method: "put",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Role),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const deleteRole = async (id, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  await fetch(`http://localhost:3000/api/role/${id}`, {
    method: "delete",
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
export { getAllRole, getRole, CreateRole, deleteRole, UpdateRole };
