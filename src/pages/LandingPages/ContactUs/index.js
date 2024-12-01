import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";


import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { Card } from "@mui/material";
import routes from "routes";
import bgImage from "assets/images/fondo_hd.jpg";
import footerRoutes from "footer.routes";
import Contact from "../Author/sections/Contact";
import { useEffect } from "react";
import AOS from "aos"

// Image

function ContactUs() {

  useEffect(() => {
    AOS.init({ 
      once: true, // Permite repetir la animación
    });
  }, []);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
      />
      <MKBox
        variant="gradient"
        minHeight="60vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.success.main, 0.7),
              rgba(gradients.warning.state, 0.4)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      />
      <Card
        sx={{
          p: 0,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(50%) blur(3px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox
          bgColor="light"
          borderRadius="xl"
          shadow="lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={10}
          mb={10}
          mx={10}
        >
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
              Sigue nuestras redes sociales{" "}
            </MKTypography>
          </MKBox>
          <MKTypography
            variant="body2"
            color="text"
            mb={3}
            alignItems="center"
            mt={5}
            ml="3vw"
            mr="3vw"
            data-aos="fade-down" data-aos-offset="400" data-aos-duration="3000"
          >
            Para una mejor atencion le recomendamos seguirnos en todas nuestras redes sociales en
            donde podra recibir una atencion mas personalizada!
          </MKTypography>
          <Grid item lg={10} alignItems="center" sx={{ textAlign: { xs: "center", lg: "center" } }}>
            <hr />
          </Grid>
          <br />
          <Grid item xs="15vmax" lg={0} mb={5}>
            <MKSocialButton
              component="a"
              href="https://twitter.com/"
              target="_blank"
              color="twitter"
              m={1}
              mt={2}
              sx={{ mr: 5 }}
              data-aos="fade-down" data-aos-offset="400" data-aos-duration="3000"
            >
              <i className="fab fa-twitter" />
              &nbsp;Conoce nuestro twitter
            </MKSocialButton>
            <MKSocialButton
              component="a"
              href="https://www.facebook.com/"
              target="_blank"
              color="facebook"
              mt={2}
              sx={{ mr: 1 }}
              data-aos="fade-down" data-aos-offset="400" data-aos-duration="3000"
            >
              <i className="fab fa-facebook" />
              &nbsp;Conoce nuestro facebook
            </MKSocialButton>
          </Grid>
        </MKBox>
        <MKBox>
        <MKBox
            variant="gradient"
            bgColor="success"
            coloredShadow="info"
            borderRadius="lg"
            p={2}
            mx="5%"
            mt={5}
            mb={10}

          >
            <MKTypography variant="h3" color="white" textAlign="center">
              ¿Quieres contactarte con nosotros?{" "}
            </MKTypography>
          </MKBox> 
          <MKBox data-aos="fade-down" data-aos-offset="400" data-aos-duration="3000">
            <Contact />
          </MKBox>
          
        </MKBox>
      </Card>
      <MKBox pt={2} px={0} mt={2} mr="25%">
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
