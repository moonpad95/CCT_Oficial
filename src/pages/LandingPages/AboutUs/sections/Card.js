import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import eye from "assets/images/eye.svg"
import flag from "assets/images/flag.svg"
import his from "assets/images/his.svg"
import MKBox from "components/MKBox";
import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";


function CardVertical() {
  return (
    <div className="container">
        <MKBox
          variant="gradient"
          bgColor="success"
          coloredShadow="warning"
          borderRadius="lg"
          p={2}
          my={5}
        
          mt={3}
        >
          <MKTypography variant="h3" color="white" textAlign="center">
          ¿Interesado en InvernaTech?
          </MKTypography>
        </MKBox>     
      <Row className="text-justify d-flex">
      <Grid mt={5} md={5} sm={10}>
        <Col>
          <Card>
            <Card.Body>
            <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={flag}
                  alt="Imagen 2"
                  style={{ borderRadius: 15, marginBottom: 5, width: 100 }}
                />
              </div>
              <Card.Title>Misión</Card.Title>
              <Card.Text className="text-dark text-wrap">
              Nustra misión es crear entornos seguros e inteligentes para un monitoreo constante de invernaderos
dedicados a los cultivos en las grandes industrias, facilitando herramientas de monitoreo
a agricultores.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Grid>
        <Grid mt={5} md={7} sm={10}>
        <Col>
          <Card>
            <Card.Body style={{background: "orange"}}>
            <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={eye}
                  alt="Imagen 2"
                  style={{ borderRadius: 15, marginBottom: 5, width: 100 }}
                />
              </div>
              <Card.Title style={{color: "white"}}>Visión</Card.Title>
              <Card.Text className="text-dark">
              Para el año 2030 todos los invernaderos dedicados al cultivo de manera comercial o
para investigación en el estado de Durango, dispongan de estas herramientas de
monitoreo para evitar tragedias y facilitar la supervisión de los cultivos. Del mismo
modo, nos planteamos para dentro de 10 años, ser la mejor opción en México en
tecnologías de monitoreo agroambientales.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Grid>
        <Grid mt={5}>
        <Col md={12} sm={10} >
          <Card>
            <Card.Body>
            <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={his}
                  alt="Imagen 2"
                  style={{ borderRadius: 15, marginBottom: 5, width: 100 }}
                />
              </div>
              <Card.Title>Antecedentes</Card.Title>
              <Card.Text className="text-dark">
                Cultive Care Technologies es una empresa creada a partir de la necesidad existente
                de monitorear y automatizar determinados procesos dentro de los invernaderos; se
                destaca principalmente la necesidad de monitorear la humedad y la temperatura en los
                invernaderos para un control más óptimo y evitando posibles pérdidas por descuidos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Grid>
      </Row>
    </div>
  );
}

export default CardVertical;
