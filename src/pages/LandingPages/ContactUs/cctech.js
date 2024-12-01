import React from "react";
// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Posts from "pages/LandingPages/Author/sections/Posts";
// import Contact from "pages/LandingPages/Author/sections/Contact";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/fondo_hd.jpg";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import Benefits from "pages/Presentation/sections/benefits";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Contact from "../Author/sections/Contact";
import Cctpost from "../Author/sections/cctechp";
import Documentation from "./documentation";

function Cctech() {
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
      <MKBox bgColor="white">
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
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(40%) blur(3px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKBox data-aos="fade-down" data-aos-offset="400" data-aos-duration="3000">
                    <Cctpost />
          </MKBox>
          <hr />
          {/* <MKBox data-aos="fade-down" data-aos-offset="200" data-aos-duration="2000">
            <Benefits />
          </MKBox> */}
        <MKBox data-aos="fade-down" data-aos-offset="300" data-aos-duration="3000">
          <Contact />
        </MKBox>
        <MKBox>
            <Documentation />
        </MKBox>
        </Card>
        <MKBox pt={2} px={0} mt={2} mr="25%">
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
        </>
     );
}

export default Cctech;