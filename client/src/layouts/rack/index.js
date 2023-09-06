import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { TextField } from "@mui/material";
import MDButton from "components/MDButton";

// Data

import { useState } from "react";
import { getAllRacks, CreateRack, UpdateRack } from "services/rack.service";
import { deleteRack } from "services/rack.service";

const Rack = () => {
  const [openForm, setOpenForm] = useState(false);
  const [id, setId] = useState("");
  const [racks, setRacks] = useState([]);
  const [result, setResult] = useState(0);
  const [update, setUpdate] = useState(false);
  const handleDelete = async (id) => {
    await deleteRack(id, setResult);
    if (result !== 0) {
      if (result === 200) {
        console.log("rack deleted");
        setResult(0);
      } else {
        console.error("failed: rack not deleted");
        setResult(0);
      }
    }
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log(id);
    const data = new FormData(event.currentTarget);
    const rack = {
      LIBELLE: data.get("rackname"),
    };
    setOpenForm(false);
    setUpdate(false);
    await UpdateRack(id, rack, setResult);
    if (result != 0) {
      if (result === 200) {
        console.log("rack updated");
        setResult(0);
      } else {
        console.error("failed: rack not updated");
        setResult(0);
      }
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const rack = {
      LIBELLE: data.get("rackname"),
    };
    setOpenForm(false);
    await CreateRack(rack, setResult);
    if (result != 0) {
      if (result === 201) {
        console.log("rack created");
        setResult(0);
      } else {
        console.error("failed: rack not created");
        setResult(0);
      }
    }
  };
  const openUpdate = (id) => {
    setId(id);
    setUpdate(true);
    setOpenForm(true);
  };
  getAllRacks(setRacks);
  const rackTable = racks;
  console.log(racks);
  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        {openForm ? (
          <Card>
            <MDBox p={2}>
              <MDTypography mb={4} variant="h6" fontWeight="medium">
                Ajouter un Rack
              </MDTypography>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  {update ? (
                    <MDBox component="form" onSubmit={handleUpdate}>
                      <MDBox mb={2}>
                        {" "}
                        <TextField
                          required
                          id="rackname"
                          name="rackname"
                          label="Libelle"
                          variant="outlined"
                          fullWidth
                        />
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
                          id="rackname"
                          name="rackname"
                          label="Libelle"
                          variant="outlined"
                          fullWidth
                        />
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
                          onClick={() => setOpenForm - false}
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
                      Racks
                    </MDTypography>
                  </MDBox>
                  <MDBox pt={3}>
                    {rackTable ? (
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
                              Header: "Libelle",
                              accessor: "LIBELLE",
                              align: "center",
                            },

                            {
                              Header: "action",
                              accessor: "action",
                              align: "center",
                            },
                          ],
                          rows: rackTable.map((rack) => ({
                            ID: rack._id,
                            LIBELLE: rack.LIBELLE ? rack.LIBELLE : "Indefinis",
                            action: (
                              <>
                                <MDTypography
                                  component="a"
                                  href="#"
                                  variant="caption"
                                  color="text"
                                  fontWeight="medium"
                                  onClick={() => openUpdate(rack._id)}
                                >
                                  modifier
                                </MDTypography>
                                <MDBox> </MDBox>
                                <MDTypography
                                  component="a"
                                  href="#"
                                  variant="caption"
                                  color="text"
                                  fontWeight="medium"
                                  onClick={() => handleDelete(rack._id)}
                                >
                                  supprimer
                                </MDTypography>
                              </>
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
                              Header: "Libelle",
                              accessor: "LIBELLE",
                              align: "center",
                            },

                            //  { Header: "action", accessor: "action", align: "center" },
                          ],
                          rows: [
                            {
                              ID: "vide",
                              LIBELLE: "vide",

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
                Ajouter un rack
              </MDButton>
            </MDBox>
          </>
        )}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};
export default Rack;
