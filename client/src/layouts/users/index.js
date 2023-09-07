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
import User from "models/user.model";
import { TextField } from "@mui/material";
import MDButton from "components/MDButton";

// Data
import { useState } from "react";
import { getAllUsers, CreateUser } from "services/user.service";

const Users = () => {
  const [openForm, setOpenForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [result, setResult] = useState(0);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      USERNAME: data.get("username"),
      NOM: data.get("name"),
      PRENOM: data.get("prenom"),
      EMAIL: data.get("email"),
      PASSWORD: "siservPassword",
    };

    await CreateUser(user, setResult);
    if (result != 0) {
      if (result === 201) {
        console.log("user created");
      } else {
        console.error("failed: user not created");
      }
    }
  };
  getAllUsers(setUsers);
  const userTable = users;
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
                  <MDBox component="form" onSubmit={handleSubmit}>
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
                      table={{
                        columns: [
                          {
                            Header: "Nom d'Utilisateur",
                            accessor: "USERNAME",
                            width: "45%",
                            align: "left",
                          },
                          { Header: "Nom", accessor: "NOM", align: "left" },
                          {
                            Header: "Prenom",
                            accessor: "PRENOM",
                            align: "center",
                          },
                          {
                            Header: "Adresse Email",
                            accessor: "EMAIL",
                            align: "center",
                          },
                          //  { Header: "action", accessor: "action", align: "center" },
                        ],

                        rows: userTable.map((user) => ({
                          USERNAME: user.USERNAME,
                          NOM: user.NOM ? user.NOM : "Indefinis",
                          PRENOM: user.PRENOM ? user.PRENOM : "Indefinis",
                          EMAIL: user.EMAIL ? user.EMAIL : "Indefinis",

                          //   action: (
                          //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                          //       Edit
                          //     </MDTypography>
                          //   ),
                        })),
                      }}
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
