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
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/foto1.png";
import Formulario from "./Formulario";

function Contact() {
  return (
    <MKBox
      component="section"
      py={{
        xs: 6,
        lg: 6,
      }}
    >
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
            Contactate con nosostros{" "}
          </MKTypography>
        </MKBox>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{
              overflow: "hidden",
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.6),
                      rgba(gradients.success.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox
                    py={6}
                    pr={6}
                    pl={{
                      xs: 6,
                      sm: 12,
                    }}
                    my="auto"
                  >
                    <MKTypography variant="h4" color="white" mb={1} fontWeight="bold">
                       ¡Contactanos!{" "}
                    </MKTypography>{" "}
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Contactate con nosotros o llena los campos correspondientes{" "}
                    </MKTypography>{" "}
                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>{" "}
                      <a href="tel:6182385321">
                        <MKTypography
                          color="white"
                          opacity={0.8}
                          ml={2}
                          fontWeight="regular"
                        >
                          (+52) 618 238 5321{" "}
                        </MKTypography>{" "}
                      </a>{" "}
                    </MKBox>{" "}
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>{" "}
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        luishernandes2.jlh @gmail.com{" "}
                      </MKTypography>{" "}
                    </MKBox>{" "}
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>{" "}
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Av.Solidaridad #124, fracc. San Marcos, Durango, Dgo.
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <Formulario />
              </Grid>{" "}
            </Grid>{" "}
          </MKBox>{" "}
        </Grid>{" "}
      </Container>{" "}
    </MKBox>
  );
}

export default Contact;
