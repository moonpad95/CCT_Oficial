
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/fondo2.jpg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 1 }}>
      <MKBox
        variant="gradient"
        bgColor="success"
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
              ¿Por qué es importante mantener el cuidado dentro del invernadero?
            </MKTypography>
            <MKTypography variant="body" color="white" mb={6} mt={2}>
              Dejamos a tu disposicion un articulo de expertos relacionado con el cuidado de
              temperatura y humedad en la tierra dentro de un invernadero
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              position="center"
              target="_blank"
              textAlign="center"
              href="https://humidificadores.mx/noticias/cuidados-basicos-de-un-invernadero/"
              sx={{ mt: 3 }}
            >
              Conocer mas
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
