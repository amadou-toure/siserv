import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { TextField } from "@mui/material";
import MDButton from "components/MDButton";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useState } from "react";

const Users = () => {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [openForm, setOpenForm] = useState(false);
  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        {openForm ? (
          <Card>
            <MDBox p={2}>
              <MDTypography mb={4} variant="h6" fontWeight="medium">
                Ajouter un utilisateur
              </MDTypography>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <MDBox component="form">
                    <MDBox mb={2}>
                      {" "}
                      <TextField
                        required
                        id="username"
                        name="username"
                        label="Nom d'utilisateur"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <TextField
                        id="name"
                        name="name"
                        label="Nom"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <TextField
                        id="prenom"
                        name="prenom"
                        label="Prenom"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <TextField
                        required
                        id="email"
                        name="email"
                        label="Adresse mail"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox mb={2}>
                      <TextField
                        required
                        id="password"
                        name="password"
                        label="Mot de passe"
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
                      Utilisateurs
                    </MDTypography>
                  </MDBox>
                  <MDBox pt={3}>
                    <DataTable
                      table={{ columns, rows }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    />
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
                Ajouter un utilisateur
              </MDButton>
            </MDBox>
          </>
        )}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};
export default Users;
