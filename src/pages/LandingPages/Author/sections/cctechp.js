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
import post1 from "assets/images/cctech1.png";
import post2 from "assets/images/cctech2.png";
import post3 from "assets/images/cctech3.png";
import post4 from "assets/images/cctech4.png";


function Cctpost() {
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
            ¿Ya conoces Cultive Care Tech? Conoce nustra App oficial{" "}
          </MKTypography>
        </MKBox>
        <Grid container spacing={5}>
          <Grid item xs={20} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Multiples opciones de CCT"
              description="Consulta documentación oficial y nuestro blog FAQ"
              action={{
                type:  "internal",
                route: "https://google.com",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Sobre CCT"
              description="Conoce más sobre CCT y contacta con nosotros"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post4}
              title="Nuevo modo oscuro"
              description="Explora nuestro modo oscuro y compatibilidad iOS y Android"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Explora nuestro ecosistema"
              description="Conoce nuestros servicios"
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

export default Cctpost;
