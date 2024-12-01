import Grid from "@mui/material/Grid";
import React from 'react';
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Container from "@mui/material/Container";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";



function Benefits() {
    return (  
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
            ¿Por qué usar InvernaTech{" "}
          </MKTypography>
        </MKBox>
      <Grid item xs={12} lg={12} sx={{ ml: "auto" }}>
            <Grid container spacing={10} >
              <Grid item xs={12} md={4}>
                <DefaultInfoCard
                  icon="access_time"
                  title="Ahorro de tiempo"
                  description="InvernaTech te permite monitorear tu invernadero de manera remota, sin tiempos de espera y con solo presionar un boton."
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DefaultInfoCard
                  icon="campaign"
                  title="Alertas oportunas"
                  description="InvernaTech cuenta con un sistema de alertas por medio de notificaciones a tu dispositivo en caso de existir peligro para tus cultivos."
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DefaultInfoCard
                  icon="eco"
                  title="Cuidado del medio ambiente"
                  description="InvernaTech está diseñado pensando en la prevención y cuidado del medio ambiente, contribuyendo al cuidado del mismo."
                />
              </Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 0, md: 6 } } }spacing={10}>
              <Grid item xs={12} md={4}>
                <DefaultInfoCard
                  icon="bolt"
                  title="Eficiente"
                  description="Realiza más actividades dentro de tu invernadero con la ayuda de los sensores CCTH"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Ahorro en gastos"
                  description="No genera costos adicionales y solo requiere de una sola inversion!"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DefaultInfoCard
                  icon="android"
                  title="Multiplataforma"
                  description="InvernaTech es compatible con Android"
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
    );
}

export default Benefits ;