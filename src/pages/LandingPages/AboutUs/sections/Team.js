
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/luna.png";
import team2 from "assets/images/alan.png";
import team3 from "assets/images/marlenne.png";
import team4 from "assets/images/angel.png";

function Team() {
  const cardImageStyle = {
    width: "120px", // Ancho fijo
    height: "120px", // Alto fijo
    objectFit: "cover", // Ajusta la imagen sin deformarla
    borderRadius: "50%", // Opcional: redondea las imágenes
  };

  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="success"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Organigrama de Cultive Care Technologies
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Luis Luna"
                position={{ color: "success", label: "Líder y encargado de Front End" }}
                description="Líder del grupo y encargado de diseño, maquetado y programación de interfaces y Front End para consumo de API's."
                sx={{ "& img": cardImageStyle }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Alan Gómez"
                position={{ color: "success", label: "Encargado de IoT" }}
                description="Principal encargado de videojuegos, diseñador de circuitos y procesos básicos."
                sx={{ "& img": cardImageStyle }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Marlenne Ibarra"
                position={{ color: "success", label: "Encargada de testing y documentación" }}
                description="Tester y encargada de supervisión y corrección de fallos; Encargada de documentación y metodologías de desarrollo."
                sx={{ "& img": cardImageStyle }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Angel E. Rentería"
                position={{ color: "success", label: "Encargado y supervisor de Back End" }}
                description="Encargado de gestión y manejo de producción de Back End mediante API's."
                sx={{ "& img": cardImageStyle }}
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
