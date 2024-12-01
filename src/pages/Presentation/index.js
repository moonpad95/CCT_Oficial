

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import "react-slideshow-image/dist/styles.css";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import Download from "pages/Presentation/sections/Download";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/fondo_hd.jpg";
import Example from "pages/LandingPages/Author/sections/Slider";
import imagelogo from "../../assets/images/only_logo.PNG";
import BackCard from "./sections/backCard";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function Presentation() {

    useEffect(() => {
      AOS.init({ 
        once: true, // Permite repetir la animación
      });
    }, []);

  
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "internal",
        //   route: "/cultivecare/invernatec",
        //   label: "Conoce InvernaTech",
        //   color: "success",
        // }}
        sticky
      />
      
      <MKBox
        variant="gradient"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.success.main, 0.7),
              rgba(gradients.warning.state, 0.4)
            )}, url(${bgImage})`,

        }}
        position="relative"
      >
        <MKBox
          minHeight="80vh"
          width="100%"
          zIndex={1}
          opacity={0.7}
          sx={{
            // backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Container>
            <Grid container item xs={10} lg={10} xl={10} justifyContent="center" mx="auto" data-aos="fade-down" data-aos-offset="-100" data-aos-duration="1000"
            >
              <MKTypography
                color="white"
                backgroundColor="#f0f0f0"
                textAlign="center"
                boxShadow="3px 3px 1px #f0f0f095"
                borderRadius={16}
                padding={4}
                paddingX={10}
                mt={2}
                mb={2}
                zIndex={2}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
               <img src={imagelogo} alt="CULTIVE CARE TECHNOLOGIES" width="150" />
                <MKTypography color="success" variant="h3">
                  Cultive <strong>CARE</strong> 
                </MKTypography>
                <MKTypography variant="h4">Technologies</MKTypography>
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(50%) blur(3px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}

      >
        <MKBox
          variant="gradient"
          bgColor="success"
          coloredShadow="warning"
          borderRadius="lg"
          p={2}
          mx="3%"
          mt={5}
          mb={-2}
          pl="5vmax"
          pr="5vmax"
          >
          <MKTypography variant="h3" color="white" textAlign="center">
            Bienvenido a Cultive Care Technologies
          </MKTypography>
        </MKBox>
`        <MKBox
        sx={{
          display: "flex",       // Usa flexbox para el alineamiento
          justifyContent: "center", // Centra horizontalmente
          alignItems: "center",  // Centra verticalmente
          minHeight: "60vh",    // Asegura que ocupe toda la altura de la ventana si es necesario
        }}
        data-aos="fade-down" data-aos-offset="300" data-aos-duration="2000"
       >
        <Example  />
        </MKBox>`
       
        <br />
        <MKBox
          variant="gradient"
          bgColor="success"
          coloredShadow="warning"
          borderRadius="lg"
          p={2}
          mx="3%"
          my={2}
          pl="5vmax"
          pr="5vmax"
        >
          <MKTypography variant="h3" color="white" textAlign="center">
          Beneficios de monitorear tu invernadero
          </MKTypography>
        </MKBox >
        <MKBox         data-aos="fade-down" data-aos-offset="300" data-aos-duration="2000"        >
           <Information />
        </MKBox>
       
        <MKBox
          variant="gradient"
          bgColor="success"
          coloredShadow="warning"
          borderRadius="lg"
          p={2}
          my={5}
          mx="3%"
          mt={-5}
          pl="5vmax"
          pr="5vmax"
        >
          <MKTypography variant="h3" color="white" textAlign="center">
          ¿Por qué cuidar tu invernadero?
          </MKTypography>
        </MKBox>
        <MKBox mx="3vw"         data-aos="fade-down" data-aos-offset="300" data-aos-duration="2000"
        >
          <Download />
        </MKBox>
        <hr />
        <MKBox
          variant="gradient"
          bgColor="success"
          coloredShadow="warning"
          borderRadius="lg"
          p={2}
          mx="3%"
          mt={5}
          mb={5}
          pl="5vmax"
          pr="5vmax"
        >
          <MKTypography variant="h3" color="white" textAlign="center">
            Conoce nuestra aplicación informativa CC-Tech
          </MKTypography>
        </MKBox>
        <MKBox 
        xs={12}
        md={8}
        lg={6}
       sx={{
        display: "flex",       // Usa flexbox para el alineamiento
        justifyContent: "center", // Centra horizontalmente
        alignItems: "center",  // Centra verticalmente
        minHeight: "20vh",    // Asegura que ocupe toda la altura de la ventana si es necesario
        }}
        data-aos="fade-down" data-aos-offset="300" data-aos-duration="2000"
        >
        <Counters className="mb-5" />
        </MKBox>
        <hr />
        <MKBox
          variant="gradient"
          bgColor="success"
          coloredShadow="warning"
          borderRadius="lg"
          p={2}
          my={5}
          mx="3%"
          mt={3}
          px="5vmax"
        >
          <MKTypography variant="h3" color="white" textAlign="center">
          ¿Interesado en InvernaTech?
          </MKTypography>
        </MKBox>
        <MKBox mx="3vw"         data-aos="fade-down" data-aos-offset="300" data-aos-duration="2000"
        >
          <BackCard />
        </MKBox>
        <hr />
      </Card>
      
      <MKBox pt={2} px={0} mt={2} mr="25%">
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
