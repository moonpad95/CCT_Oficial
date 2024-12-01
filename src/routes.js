// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "pages/LandingPages/ContactUs";
import Author from "pages/LandingPages/Author";
import Cctech from "pages/LandingPages/ContactUs/cctech";

// Sections

const routes = [
  {
    // route: "/cultivecare/invernatec",
    // component: <Author />,
  },
  {
    name: "¿Quienes somos?",
    icon: <Icon>language</Icon>,
    route: "/cultivecare/nosotros",
    component: <AboutUs />,
  },
  {
    name: "Redes sociales",
    icon: <Icon>group</Icon>,
    route: "/cultivecare/contacto",
    component: <ContactUs />,
  },
  {
    name: "Conoce InvernaTech",
    icon: <Icon>yard</Icon>,
    route: "/cultivecare/invernatech",
    component: <Author />,
  },
  {
    name: "Conoce CC-Tech",
    icon: <Icon>eco</Icon>,
    route: "/cultivecare/cctech",
    component: <Cctech />,
  },
  
];

export default routes;
