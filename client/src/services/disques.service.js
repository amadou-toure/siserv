const getDisques = async (_id, setDisques) => {
  const handleresult = async (data) => {
    setDisques(data.data);
  };
  await fetch(`http://localhost:3000/api/disques/${_id}`, {
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
const getAllDisques = async (setDisques) => {
  const handleresult = async (data) => {
    setDisques(data.data);
  };
  await fetch(`http://localhost:3000/api/disques`, {
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
const CreateDisques = async (Disques, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(Disques);
  await fetch(`http://localhost:3000/api/disques`, {
    method: "post",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Disques),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const UpdateDisques = async (id, Disques, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(id);
  await fetch(`http://localhost:3000/api/disques/${id}`, {
    method: "put",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Disques),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const deleteDisques = async (id, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  await fetch(`http://localhost:3000/api/disques/${id}`, {
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
export {
  getAllDisques,
  getDisques,
  CreateDisques,
  deleteDisques,
  UpdateDisques,
};
