
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples

import cartel from "../../../assets/presentation/invernatech"

function Counters() {
  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid
          container
          justifyContent="center" // Centra horizontalmente
          alignItems="center" // Centra verticalmente (si el contenedor tiene altura suficiente)
          sx={{ minHeight: "50vh" }} // Opcional: asegura altura mínima para mejor centrado
        >
          <Grid
            item
            xs={12}
            md={8}
            lg={6}
            sx={{
              alignSelf: "center",
              bgcolor: "#f0f0f090",
              borderRadius: 2,
              boxShadow: "3px 3px 1px green",
            }}
          >
            <img src={cartel} width="100%" alt="Cartel" />
          </Grid>
        </Grid>
      </Container>
      <hr />
    </MKBox>
  );
}

export default Counters;
