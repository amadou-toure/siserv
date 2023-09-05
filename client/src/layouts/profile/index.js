/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { TextField, Link } from "@mui/material";

// Overview page components

import getUser from "services/user.service";
import Card from "@mui/material/Card";

import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import backgroundImage from "assets/images/bg-profile.jpeg";
import { Button } from "@mui/material";
import { User } from "models/user.model";
import { useEffect, useState } from "react";
import { yellow } from "@mui/material/colors";

function Overview() {
  const [user, setUser] = useState({});
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  getUser(setUser);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <MDBox position="relative" mb={5}>
        <MDBox
          display="flex"
          alignItems="center"
          position="relative"
          minHeight="18.75rem"
          borderRadius="xl"
          sx={{
            backgroundImage: ({
              functions: { rgba, linearGradient },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.info.main, 0.6),
                rgba(gradients.info.state, 0.6)
              )}, url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            overflow: "hidden",
          }}
        />
        <Card
          sx={{
            position: "relative",
            mt: -8,
            mx: 3,
            py: 2,
            px: 2,
          }}
        >
          <Grid container spacing={3} alignItems="center" mb={9}>
            <Grid item>
              <MDAvatar
                src={burceMars}
                alt="profile-image"
                size="xl"
                shadow="sm"
              />
            </Grid>
            <Grid item>
              <MDBox height="100%" mt={0.5} lineHeight={1}>
                <MDTypography variant="h5" fontWeight="medium">
                  {user.USERNAME}
                </MDTypography>
                <MDTypography
                  variant="button"
                  color="text"
                  fontWeight="regular"
                >
                  {user.UserRole}
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
          {openForm ? (
            <MDBox p={2}>
              <MDTypography mb={4} variant="h6" fontWeight="medium">
                Modifier les informations
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
          ) : (
            <MDBox
              lineHeight={1.25}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginRight: 0,
                marginLeft: 0,
              }}
            >
              <MDTypography variant="h6" fontWeight="medium">
                Nom
                <MDBox mb={1} marginRight={9} marginLeft={9}>
                  <MDTypography variant="button" color="text">
                    {user.NOM ? user.NOM : "indefinis"}
                  </MDTypography>
                </MDBox>
              </MDTypography>

              <MDTypography variant="h6" fontWeight="medium">
                Prenom
                <MDBox mb={1} marginRight={9} marginLeft={9}>
                  <MDTypography variant="button" color="text">
                    {user.PRENOM ? user.PRENOM : "indefinis"}
                  </MDTypography>
                </MDBox>
              </MDTypography>

              <MDTypography variant="h6" fontWeight="medium">
                Adresse Email
                <MDBox mb={1} marginRight={9} marginLeft={9}>
                  <MDTypography variant="button" color="text">
                    {user.EMAIL ? user.EMAIL : "indefinis"}
                  </MDTypography>
                </MDBox>
              </MDTypography>

              <MDTypography variant="h6" fontWeight="medium">
                Nom d'utilisateur
                <MDBox mb={1} marginRight={9} marginLeft={9}>
                  <MDTypography variant="button" color="text">
                    {user.USERNAME ? user.USERNAME : "indefinis"}
                  </MDTypography>
                </MDBox>
              </MDTypography>
              <MDBox>
                <MDButton
                  variant="gradient"
                  color="info"
                  type="submit"
                  fullWidth
                  onClick={() => setOpenForm(true)}
                >
                  Modifier
                </MDButton>
              </MDBox>
            </MDBox>
          )}
        </Card>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
