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
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/fondo3.jpeg";

function BackCard() {
  return (
    <MKBox component="section" py={{ xs: 1, sm: 2 }}>
      <MKBox
        variant="gradient"
        bgColor="warning"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Asegura que la imagen cubra el contenedor sin deformarse
            objectPosition: "center", // Centra la imagen
            zIndex: 1,
            opacity: 0.3,
          }}
        />
        <Container sx={{ position: "relative", zIndex: 1, py: 20 }}>
          <Grid container item xs={11} md={9} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h2" color="white">
             ¿Tienes un invernadero y buscas un sistema más eficiente de monitoréo?
            </MKTypography>

            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              position="center"
              target="_self"
              textAlign="center"
              href="cultivecare/contacto"
              sx={{ mt: 3 }}
            >
              Contactanos!
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default BackCard;
