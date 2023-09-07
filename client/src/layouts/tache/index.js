import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { TextField, InputLabel, Select, MenuItem } from "@mui/material";
import MDButton from "components/MDButton";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Icon from "@mui/material/Icon";

// Data

import { useState } from "react";
import { getAllTache, CreateTache, UpdateTache } from "services/tache.service";
import { deleteTache } from "services/tache.service";
import { getAllServer, getServer } from "services/server.service";
import { getAllUsers, getManager } from "services/user.service";

const Tache = () => {
  const [openForm, setOpenForm] = useState(false);
  const [id, setId] = useState("");
  const [tache, setTache] = useState([]);

  const [result, setResult] = useState(0);
  const [update, setUpdate] = useState(false);
  const [selectedUser, setSelectedUser] = useState(0);
  const [selectedServer, setSelectedServer] = useState(0);
  const [manager, setManager] = useState([]);
  const [server, setServer] = useState([]);
  const [serverHN, setServerHN] = useState();
  const [userN, setUSerN] = useState();
  const getUserName = (id) => {
    getManager(id, setUSerN);
    return userN;
  };
  const getHostName = (id) => {
    getServer(id, setServerHN);
    return serverHN;
  };

  const handleSelectedUSer = (event) => {
    setSelectedUser(event.target.value);
  };
  const handleSelectedServer = (event) => {
    setSelectedServer(event.target.value);
  };
  const handleDelete = async (id) => {
    await deleteTache(id, setResult);
    if (result !== 0) {
      if (result === 200) {
        console.log("tache deleted");
        setResult(0);
      } else {
        console.error("failed: tache not deleted");
        setResult(0);
      }
    }
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log(id);
    const data = new FormData(event.currentTarget);
    const tache = {
      MESSAGE: data.get("message"),
      ADMINISTRATEUR: localStorage.getItem("user"),
      MANAGER: selectedUser,
      SERVEUR: selectedServer,
    };
    setOpenForm(false);
    setUpdate(false);
    await UpdateTache(id, tache, setResult);
    if (result != 0) {
      if (result === 200) {
        console.log("tache updated");
        setResult(0);
      } else {
        console.error("failed: tache not updated");
        setResult(0);
      }
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const tache = {
      MESSAGE: data.get("message"),
      ADMINISTRATEUR: localStorage.getItem("user"),
      MANAGER: selectedUser,
      SERVEUR: selectedServer,
    };
    setOpenForm(false);
    await CreateTache(tache, setResult);
    if (result != 0) {
      if (result === 201) {
        console.log("tache created");
        setResult(0);
      } else {
        console.error("failed: tache not created");
        setResult(0);
      }
    }
  };
  const openUpdate = (id) => {
    setId(id);
    setUpdate(true);
    setOpenForm(true);
  };
  getAllServer(setServer);

  getAllUsers(setManager);
  console.log(manager);
  getAllTache(setTache);
  const tacheTable = tache;
  console.log(tache);
  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        {openForm ? (
          <Card>
            <MDBox p={2}>
              <MDTypography mb={4} variant="h6" fontWeight="medium">
                Ajouter un Tache
              </MDTypography>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  {update ? (
                    <MDBox component="form" onSubmit={handleUpdate}>
                      <MDBox mb={2}>
                        {" "}
                        <TextareaAutosize
                          required
                          id="message"
                          name="message"
                          label="Message"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox mb={2}>
                        {" "}
                        <InputLabel id="demo-simple-select-label">
                          Assigner a:
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectedUser}
                          label="choisir un utilisateur"
                          onChange={handleSelectedUSer}
                        >
                          {manager.map((manager) => (
                            <MenuItem value={manager.id}>
                              {manager.USERNAME}
                            </MenuItem>
                          ))}
                        </Select>
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
                        <TextareaAutosize
                          required
                          id="message"
                          name="message"
                          label="Message"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox mb={2}>
                        {" "}
                        <InputLabel id="manager">Assigner a:</InputLabel>
                        <Select
                          labelId="manager"
                          id="manager"
                          value={selectedUser}
                          label="choisir un utilisateur"
                          onChange={handleSelectedUSer}
                        >
                          {manager.map((manager) => (
                            <MenuItem value={manager._id}>
                              {manager.USERNAME}
                            </MenuItem>
                          ))}
                        </Select>
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
                      TacheS
                    </MDTypography>
                  </MDBox>
                  <MDBox pt={3}>
                    {tacheTable ? (
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
                              Header: "SERVEUR",
                              accessor: "SERVER",
                              align: "center",
                            },
                            {
                              Header: "MANAGEUR",
                              accessor: "MANAGER",
                              align: "center",
                            },
                            {
                              Header: "MESSAGE",
                              accessor: "MESSAGE",
                              align: "center",
                            },

                            {
                              Header: "action",
                              accessor: "action",
                              align: "center",
                            },
                          ],
                          rows: tacheTable.map((tache) => ({
                            ID: tache._id,
                            SERVER: tache.SERVEUR
                              ? getHostName(tache.SERVEUR)
                                ? serverHN.HOSTNAME
                                : "Indefinis"
                              : "Indefinis",
                            MANAGER: tache.MANAGER
                              ? getUserName(tache.MANAGER)
                                ? userN.USERNAME
                                : "Indefinis"
                              : "Indefinis",
                            MESSAGE: tache.MESSAGE
                              ? tache.MESSAGE
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
                                    onClick={() => handleDelete(tache._id)}
                                  >
                                    <Icon>delete</Icon>&nbsp;Supprimer
                                  </MDButton>
                                </MDBox>
                                <MDButton
                                  variant="text"
                                  color="dark"
                                  onClick={() => openUpdate(tache._id)}
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
                              accessor: "ID",
                              width: "45%",
                              align: "left",
                            },
                            {
                              Header: "SERVEUR",
                              accessor: "SERVER",
                              align: "center",
                            },
                            {
                              Header: "MANAGEUR",
                              accessor: "MANAGER",
                              align: "center",
                            },
                            {
                              Header: "MESSAGE",
                              accessor: "MESSAGE",
                              align: "center",
                            },

                            //  { Header: "action", accessor: "action", align: "center" },
                          ],
                          rows: [
                            {
                              ID: "vide",
                              MANAGER: "vide",
                              SERVER: "vide",
                              MESSAGE: "vide",

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
                Ajouter un tache
              </MDButton>
            </MDBox>
          </>
        )}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};
export default Tache;
