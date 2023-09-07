import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { TextField } from "@mui/material";
import { getServer } from "services/server.service";
import { getAllServer } from "services/server.service";
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";

// Data

import { useState } from "react";
import {
  getAllDisques,
  CreateDisques,
  UpdateDisques,
} from "services/disques.service";
import { deleteDisques } from "services/disques.service";

const Disques = () => {
  const [openForm, setOpenForm] = useState(false);
  const [id, setId] = useState("");
  const [disques, setDisques] = useState([]);
  const [selectedServer, setSelectedServer] = useState(0);
  const [server, setServer] = useState([]);
  const [serverHN, setServerHN] = useState();
  const [result, setResult] = useState(0);
  const [update, setUpdate] = useState(false);
  const handleDelete = async (id) => {
    await deleteDisques(id, setResult);
    if (result !== 0) {
      if (result === 200) {
        console.log("disques deleted");
        setResult(0);
      } else {
        console.error("failed: disques not deleted");
        setResult(0);
      }
    }
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log(id);
    const data = new FormData(event.currentTarget);
    const disques = {
      NOM: data.get("disquesname"),
      TYPE: data.get("type"),
      CAPACITE: data.get("capacite"),
      SERVER: selectedServer,
    };
    setOpenForm(false);
    setUpdate(false);
    await UpdateDisques(id, disques, setResult);
    if (result != 0) {
      if (result === 200) {
        console.log("disques updated");
        setResult(0);
      } else {
        console.error("failed: disques not updated");
        setResult(0);
      }
    }
  };
  getAllServer(setServer);

  const handleSelectedServer = (event) => {
    setSelectedServer(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const disques = {
      NOM: data.get("disquesname"),
      TYPE: data.get("type"),
      CAPACITE: data.get("capacite"),
      SERVER: selectedServer,
    };
    setOpenForm(false);
    await CreateDisques(disques, setResult);
    if (result != 0) {
      if (result === 201) {
        console.log("disques created");
        setResult(0);
      } else {
        console.error("failed: disques not created");
        setResult(0);
      }
    }
  };
  const openUpdate = (id) => {
    setId(id);
    setUpdate(true);
    setOpenForm(true);
  };
  getAllDisques(setDisques);
  const disquesTable = disques;
  console.log(disques);
  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        {openForm ? (
          <Card>
            <MDBox p={2}>
              <MDTypography mb={4} variant="h6" fontWeight="medium">
                Ajouter un Disques
              </MDTypography>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  {update ? (
                    <MDBox component="form" onSubmit={handleUpdate}>
                      <MDBox mb={2}>
                        {" "}
                        <TextField
                          required
                          id="disquesname"
                          name="disquesname"
                          label="Nom"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox mb={2}>
                        {" "}
                        <TextField
                          required
                          id="type"
                          name="type"
                          label="Type"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox mb={2}>
                        {" "}
                        <TextField
                          required
                          id="capacite"
                          name="capacite"
                          label="Capacite"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox mb={2}>
                        {" "}
                        <InputLabel id="server">Serveur:</InputLabel>
                        <Select
                          labelId="server"
                          id="server"
                          value={selectedServer}
                          label="Choisir un serveur"
                          onChange={handleSelectedServer}
                        >
                          {server.map((server) => (
                            <MenuItem value={server._id}>
                              {server.HOSTNAME}
                            </MenuItem>
                          ))}
                        </Select>
                      </MDBox>

                      <MDBox
                        mt={4}
                        mb={1}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "space-between",
                        }}
                      >
                        <MDButton
                          variant="gradient"
                          color="info"
                          type="submit"
                          fullWidth
                        >
                          Modifier
                        </MDButton>
                        <MDBox marginRight={2} marginLeft={2} mt={4} mb={1}>
                          {""}
                        </MDBox>
                        <MDButton
                          variant="gradient"
                          sx={{ backgroundColor: "yellow", color: "black" }}
                          type="button"
                          onClick={() => setOpenForm(false)}
                          fullWidth
                        >
                          Annuler
                        </MDButton>
                      </MDBox>
                    </MDBox>
                  ) : (
                    <MDBox component="form" onSubmit={handleSubmit}>
                      <MDBox mb={2}>
                        {" "}
                        <TextField
                          required
                          id="disquesname"
                          name="disquesname"
                          label="Nom"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox mb={2}>
                        {" "}
                        <TextField
                          required
                          id="type"
                          name="type"
                          label="Type"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox mb={2}>
                        {" "}
                        <TextField
                          required
                          id="capacite"
                          name="capacite"
                          label="Capacite"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox mb={2}>
                        {" "}
                        <InputLabel id="server">Serveur:</InputLabel>
                        <Select
                          labelId="server"
                          id="server"
                          value={selectedServer}
                          label="Choisir un serveur"
                          onChange={handleSelectedServer}
                        >
                          {server.map((server) => (
                            <MenuItem value={server._id}>
                              {server.HOSTNAME}
                            </MenuItem>
                          ))}
                        </Select>
                      </MDBox>

                      <MDBox
                        mt={4}
                        mb={1}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "space-between",
                        }}
                      >
                        <MDButton
                          variant="gradient"
                          color="info"
                          type="submit"
                          fullWidth
                        >
                          Valider
                        </MDButton>
                        <MDBox marginRight={2} marginLeft={2} mt={4} mb={1}>
                          {""}
                        </MDBox>
                        <MDButton
                          variant="gradient"
                          sx={{ backgroundColor: "yellow", color: "black" }}
                          type="button"
                          onClick={() => setOpenForm(false)}
                          fullWidth
                        >
                          Annuler
                        </MDButton>
                      </MDBox>
                    </MDBox>
                  )}
                </Grid>
              </Grid>
            </MDBox>
          </Card>
        ) : (
          <>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Card>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                  >
                    <MDTypography variant="h6" color="white">
                      Disques
                    </MDTypography>
                  </MDBox>
                  <MDBox pt={3}>
                    {disquesTable ? (
                      <DataTable
                        table={{
                          columns: [
                            {
                              Header: "ID",
                              accessor: "ID",
                              width: "45%",
                              align: "left",
                            },
                            {
                              Header: "Nom",
                              accessor: "NOM",
                              align: "center",
                            },
                            {
                              Header: "Type",
                              accessor: "type",
                              align: "center",
                            },
                            {
                              Header: "Capacite",
                              accessor: "capacite",
                              align: "center",
                            },
                            {
                              Header: "Serveur",
                              accessor: "server",
                              align: "center",
                            },

                            {
                              Header: "action",
                              accessor: "action",
                              align: "center",
                            },
                          ],
                          rows: disquesTable.map((disques) => ({
                            ID: disques._id,
                            NOM: disques.NOM ? disques.NOM : "Indefinis",
                            type: disques.TYPE ? disques.TYPE : "Indefinis",
                            capacite: disques.CAPACITE
                              ? disques.CAPACITE
                              : "Indefinis",
                            server: disques.SERVER
                              ? disques.SERVER
                              : "Indefinis",
                            action: (
                              <MDBox
                                display="flex"
                                alignItems="center"
                                mt={{ xs: 2, sm: 0 }}
                                ml={{ xs: -1.5, sm: 0 }}
                              >
                                <MDBox mr={1}>
                                  <MDButton
                                    variant="text"
                                    color="error"
                                    onClick={() => handleDelete(disques._id)}
                                  >
                                    <Icon>delete</Icon>&nbsp;Supprimer
                                  </MDButton>
                                </MDBox>
                                <MDButton
                                  variant="text"
                                  color="dark"
                                  onClick={() => openUpdate(disques._id)}
                                >
                                  <Icon>edit</Icon>&nbsp;Modifier
                                </MDButton>
                              </MDBox>
                            ),
                          })),
                        }}
                        isSorted={false}
                        entriesPerPage={false}
                        showTotalEntries={false}
                        noEndBorder
                      />
                    ) : (
                      <DataTable
                        table={{
                          columns: [
                            {
                              Header: "ID",
                              accessor: "_id",
                              width: "45%",
                              align: "left",
                            },
                            {
                              Header: "Nom",
                              accessor: "NOM",
                              align: "center",
                            },
                            {
                              Header: "Type",
                              accessor: "type",
                              align: "center",
                            },
                            {
                              Header: "Capacite",
                              accessor: "capacite",
                              align: "center",
                            },
                            {
                              Header: "Serveur",
                              accessor: "server",
                              align: "center",
                            },

                            //  { Header: "action", accessor: "action", align: "center" },
                          ],
                          rows: [
                            {
                              ID: "vide",
                              NOM: "vide",

                              //   action: (
                              //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                              //       Edit
                              //     </MDTypography>
                              //   ),
                            },
                          ],
                        }}
                        isSorted={false}
                        entriesPerPage={false}
                        showTotalEntries={false}
                        noEndBorder
                      />
                    )}
                  </MDBox>
                </Card>
              </Grid>
            </Grid>
            <MDBox mb={3}>
              <MDButton
                variant="gradient"
                color="info"
                type="button"
                onClick={() => setOpenForm(true)}
                fullWidth
              >
                Ajouter un disques
              </MDButton>
            </MDBox>
          </>
        )}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};
export default Disques;
