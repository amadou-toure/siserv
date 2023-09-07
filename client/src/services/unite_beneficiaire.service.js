const getUnite_beneficiaire = async (_id, setUnite_beneficiaire) => {
  const handleresult = async (data) => {
    setUnite_beneficiaire(data.data);
  };
  await fetch(`http://localhost:3000/api/unite_beneficiaire/${_id}`, {
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
const getAllUnite_beneficiaire = async (setUnite_beneficiaire) => {
  const handleresult = async (data) => {
    setUnite_beneficiaire(data.data);
  };
  await fetch(`http://localhost:3000/api/unite_beneficiaire`, {
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
const CreateUnite_beneficiaire = async (Unite_beneficiaire, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(Unite_beneficiaire);
  await fetch(`http://localhost:3000/api/unite_beneficiaire`, {
    method: "post",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Unite_beneficiaire),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const UpdateUnite_beneficiaire = async (id, Unite_beneficiaire, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  console.log(id);
  await fetch(`http://localhost:3000/api/unite_beneficiaire/${id}`, {
    method: "put",
    headers: {
      authorization: localStorage.getItem("token"),
      "content-Type": "application/json",
    },
    body: JSON.stringify(Unite_beneficiaire),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      handleresult(data);
    });
};

const deleteUnite_beneficiaire = async (id, setResult) => {
  const handleresult = async (data) => {
    setResult(data.code);
  };
  await fetch(`http://localhost:3000/api/unite_beneficiaire/${id}`, {
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
  getAllUnite_beneficiaire,
  getUnite_beneficiaire,
  CreateUnite_beneficiaire,
  deleteUnite_beneficiaire,
  UpdateUnite_beneficiaire,
};
