/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/ccth1.png";
import post2 from "assets/images/ccth2.png";
import post3 from "assets/images/ccth3.png";

function Places() {
  return (
    <MKBox component="section" py={8} textAlign="center">
      <Container>
        <MKBox
          variant="gradient"
          bgColor="success"
          coloredShadow="info"
          borderRadius="lg"
          p={2}
          mx="0%"
          mt={5}
          mb={10}
          pl="5vmax"
          pr="5vmax"
        >
          <MKTypography variant="h3" color="white" textAlign="center">
            Funciones de InvernaTech{" "}
          </MKTypography>
        </MKBox>
        <Grid container spacing={5}>
          <Grid item xs={20} sm={6} lg={4}>
            <TransparentBlogCard
              image={post1}
              title="Monitoreo en tiempo real"
              description="Monitoreo constante en la aplicacion para concer Temperatura y humedad de manera remota y en vivo"
              action={{
                type: "internal",
                route: "https://google.com",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <TransparentBlogCard
              image={post3}
              title="Pronósticos"
              description="Pronóstico de temperatura en tu invernadero"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <TransparentBlogCard
              image={post2}
              title="Estadisticas y promedios de temperatura y humedad"
              description="Si desea conocer cual fue el promedio de temperaturas de este mes o del dia en general, es posible con InvernaTec"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
