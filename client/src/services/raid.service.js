const getRaid = async (_id, setRaid) => {
  const handleresult = async (data) => {
    setRaid(data.data);
  };
  await fetch(`http://localhost:3000/api/raid/${_id}`, {
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
const getAllRaid = async (setRaid) => {
  const handleresult = async (data) => {
    setRaid(data.data);
  };
  await fetch(`http://localhost:3000/api/raid`, {
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
const CreateRaid = async (Raid, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(Raid);
  await fetch(`http://localhost:3000/api/raid`, {
    method: "post",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Raid),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const UpdateRaid = async (id, Raid, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(id);
  await fetch(`http://localhost:3000/api/raid/${id}`, {
    method: "put",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Raid),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const deleteRaid = async (id, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  await fetch(`http://localhost:3000/api/raid/${id}`, {
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
export { getAllRaid, getRaid, CreateRaid, deleteRaid, UpdateRaid };
