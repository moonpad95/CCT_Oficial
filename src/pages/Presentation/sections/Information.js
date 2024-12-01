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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/cardfront.png";
import bgBack from "assets/images/cardback.png";

function Information() {
  return (
    <MKBox component="section" py={6} my={2}>
      <Container>
        <Grid container item xs={11} spacing={3} mb={8} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={10} lg="2.9" sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Conoce Nuestra
                    <br />
                    App Movil
                  </>
                }
                description="Solicita a uno de nuestros asesores mas información!"
              />
              <RotatingCardBack
                image={bgBack}
                title="Descubre mas!"
                description="Descubre los increibles beneficios de usar InvernaTech."
                action={{
                  type: "internal",
                  route: "/cultivecare/invernatech",
                  label: "invernatech",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="access_time"
                  title="Ahorro de tiempo"
                  description="InvernaTec te permite monitorear tu invernadero de manera remota, sin tiempos de espera y con solo presionar un boton."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="campaign"
                  title="Alertas oportunas"
                  description="InvernaTec cuenta con un sistema de alertas por medio de notificaciones a tu dispositivo en caso de existir peligro para tus cultivos."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Ahorro en gastos"
                  description="No genera costos adicionales y solo requiere de una sola inversion!"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="android"
                  title="Compatible con Android"
                  description="InvernaTec es compatible con Android"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <hr />
    </MKBox>
  );
}

export default Information;
