const getIdentification = async (_id, setIdentification) => {
  const handleresult = async (data) => {
    setIdentification(data.data);
  };
  await fetch(`http://localhost:3000/api/identification/${_id}`, {
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
const getAllIdentification = async (setIdentification) => {
  const handleresult = async (data) => {
    setIdentification(data.data);
  };
  await fetch(`http://localhost:3000/api/identification`, {
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
const CreateIdentification = async (Identification, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(Identification);
  await fetch(`http://localhost:3000/api/identification`, {
    method: "post",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Identification),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const UpdateIdentification = async (id, Identification, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(id);
  await fetch(`http://localhost:3000/api/identification/${id}`, {
    method: "put",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Identification),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const deleteIdentification = async (id, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  await fetch(`http://localhost:3000/api/identification/${id}`, {
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
  getAllIdentification,
  getIdentification,
  CreateIdentification,
  deleteIdentification,
  UpdateIdentification,
};
