/* eslint-disable react/jsx-no-duplicate-props */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import macbook from "assets/images/only_logo.PNG";

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Conoce al equipo de Cultive Care Technologies</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Si quieres conocer mas detalles sobre Cultive Care y colaboradores te invitamos a
              seguir nuestras redes sociales.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="40%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
