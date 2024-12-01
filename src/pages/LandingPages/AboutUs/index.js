import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import "aos/dist/aos.css";
import AOS from "aos";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/fondo_hd.jpg";
import { useEffect } from "react";
import { Grid } from "@mui/material";

function AboutUs() {

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
        //   label: "Más sobre InvernaTec",
        //   color: "success",
        // }}
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
        <Grid         data-aos="fade-down" data-aos-offset="300" data-aos-duration="2000"
        >
                  <Information />
        </Grid>
        <MKBox        data-aos="fade-down" data-aos-offset="300" data-aos-duration="2000"
        >
                  <Team />

        </MKBox>
        <MKBox        data-aos="fade-down" data-aos-offset="300" data-aos-duration="2000"
        >
                  <Newsletter />
        </MKBox>
      </Card>
      <MKBox pt={2} px={0} mt={2} mr="25%">
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
