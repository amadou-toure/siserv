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
import {
  getAllIdentification,
  CreateIdentification,
  UpdateIdentification,
} from "services/identification.service";
import { deleteIdentification } from "services/identification.service";

const Identification = () => {
  const [openForm, setOpenForm] = useState(false);
  const [id, setId] = useState("");
  const [identification, setIdentification] = useState([]);
  const [result, setResult] = useState(0);
  const [update, setUpdate] = useState(false);
  const handleDelete = async (id) => {
    await deleteIdentification(id, setResult);
    if (result !== 0) {
      if (result === 200) {
        console.log("identification deleted");
        setResult(0);
      } else {
        console.error("failed: identification not deleted");
        setResult(0);
      }
    }
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log(id);
    const data = new FormData(event.currentTarget);
    const identification = {
      LIBELLE: data.get("identificationname"),
    };
    setOpenForm(false);
    setUpdate(false);
    await UpdateIdentification(id, identification, setResult);
    if (result != 0) {
      if (result === 200) {
        console.log("identification updated");
        setResult(0);
      } else {
        console.error("failed: identification not updated");
        setResult(0);
      }
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const identification = {
      LIBELLE: data.get("identificationname"),
    };
    setOpenForm(false);
    await CreateIdentification(identification, setResult);
    if (result != 0) {
      if (result === 201) {
        console.log("identification created");
        setResult(0);
      } else {
        console.error("failed: identification not created");
        setResult(0);
      }
    }
  };
  const openUpdate = (id) => {
    setId(id);
    setUpdate(true);
    setOpenForm(true);
  };
  getAllIdentification(setIdentification);
  const identificationTable = identification;
  console.log(identification);
  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        {openForm ? (
          <Card>
            <MDBox p={2}>
              <MDTypography mb={4} variant="h6" fontWeight="medium">
                Ajouter un Identification
              </MDTypography>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  {update ? (
                    <MDBox component="form" onSubmit={handleUpdate}>
                      <MDBox mb={2}>
                        {" "}
                        <TextField
                          required
                          id="identificationname"
                          name="identificationname"
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
                          id="identificationname"
                          name="identificationname"
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
                      Identification
                    </MDTypography>
                  </MDBox>
                  <MDBox pt={3}>
                    {identificationTable ? (
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
                          rows: identificationTable.map((identification) => ({
                            ID: identification._id,
                            LIBELLE: identification.LIBELLE
                              ? identification.LIBELLE
                              : "Indefinis",

                            action: (
                              <>
                                <MDTypography
                                  component="a"
                                  href="#"
                                  variant="caption"
                                  color="text"
                                  fontWeight="medium"
                                  onClick={() => openUpdate(identification._id)}
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
                                  onClick={() =>
                                    handleDelete(identification._id)
                                  }
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
                Ajouter un identification
              </MDButton>
            </MDBox>
          </>
        )}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};
export default Identification;
