// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/CCT2_logo2.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Cultive Care Tecnologies",
    image: logoCT,
    route: "/Home",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/moonpad95",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/@joseluislunahernandez6341",
    },
  ],
  menus: [
    {
      name: "Recursos del agricultor",
      items: [
        {
          name: "Conoce más sobre invernaderos",
          href: "https://www.hydroenv.com.mx/catalogo/index.php?main_page=page&id=44",
        },
        { name: "Revisa la documentación oficial", href: "/" },
      ],
    },
    {
      name: "Ayuda y soporte Invernatec",
      items: [{ name: "Conoce sobre InvernaTec ", href: "/cultivecare/invernatec" }],
    },
    {
      name: "Informacion",
      items: [
        { name: "Sobre nosotros", href: "/cultivecare/nosotros" },
        { name: "Revisa nuestras publicaciones", href: "/cultivecare/contacto" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos los derechos reservados para Cultive Care Tecnologies {date}.{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      />
    </MKTypography>
  ),
};
