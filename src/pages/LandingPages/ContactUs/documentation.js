import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import React from "react";
function Documentation() {
    return ( <>

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
            pl="10vmax"
            pr="10vmax"
          >
            <MKTypography variant="h3" color="white" textAlign="center">
              Mayores informes
            </MKTypography>
          </MKBox>
        <MKBox
          bgColor="light"
          borderRadius="xl"
          px={12}
          py={5}
          alignItems="center"
          justifyContent="center"
          mb={12}
        >
            <MKBox
           bgColor="warning"
           borderRadius="xl"
            >
            <MKTypography
            variant="h3"
            color="white"
            mb={3}
            p={2}
            alignItems="center"
            mt={5}
            ml="3vw"
            mr="3vw"
            data-aos="fade-down" data-aos-offset="400" data-aos-duration="3000"
          >
            Te dejamos nuestra a tu dispoción nuestra documentación oficial
          </MKTypography>                
            </MKBox>
         
          <br />
          <MKBox 
  mb={5} 
  spacing={5} 
  sx={{
    display: "flex", 
    justifyContent: "center",
  }}
>
  <Grid 
    container 
    spacing={3} // Espaciado entre los botones
    justifyContent="center" // Centra los botones horizontalmente
    alignItems="center" // Centra verticalmente si hay más contenido
  >
    <Grid item xs={12} lg={4}> {/* 12 columnas en pantallas pequeñas, 4 en grandes */}
      <MKButton
        variant="gradient"
        color="info"
        size="large"
        component="a"
        target="_blank"
        href="https://drive.google.com/file/d/1_KHOKEguy69kI67JYyLyUOIRAoHaHT8h/view?usp=sharing"
        fullWidth // Hace que el botón se extienda en pantallas pequeñas
      >
        Documento Integradora
      </MKButton>
    </Grid>
    <Grid item xs={12} lg={4}>
      <MKButton
        variant="gradient"
        color="warning"
        size="large"
        component="a"
        target="_blank"
        href="https://drive.google.com/file/d/1vaTYV4ddo5BNBrsGD2stRGxcaThT0rZ1/view?usp=sharing"
        fullWidth
      >
        Artículo Científico
      </MKButton>               
    </Grid>
    <Grid item xs={12} lg={4}>
      <MKButton
        variant="gradient"
        color="success"
        size="large"
        component="a"
        target="_blank"
        href="https://drive.google.com/file/d/1_KHOKEguy69kI67JYyLyUOIRAoHaHT8h/view?usp=sharing"
        fullWidth
      >
        App CC-TECH
      </MKButton>
    </Grid>
  </Grid>
</MKBox>

        </MKBox>  
        </Container>
  
    </> 
);
}

export default Documentation;