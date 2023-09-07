const getObservation = async (_id, setObservation) => {
  const handleresult = async (data) => {
    setObservation(data.data);
  };
  await fetch(`http://localhost:3000/api/observation/${_id}`, {
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
const getAllObservation = async (setObservation) => {
  const handleresult = async (data) => {
    setObservation(data.data);
  };
  await fetch(`http://localhost:3000/api/observation`, {
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
const CreateObservation = async (Observation, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(Observation);
  await fetch(`http://localhost:3000/api/observation`, {
    method: "post",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Observation),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const UpdateObservation = async (id, Observation, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(id);
  await fetch(`http://localhost:3000/api/observation/${id}`, {
    method: "put",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Observation),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const deleteObservation = async (id, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  await fetch(`http://localhost:3000/api/observation/${id}`, {
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
  getAllObservation,
  getObservation,
  CreateObservation,
  deleteObservation,
  UpdateObservation,
};
