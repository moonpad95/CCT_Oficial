/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Carousel, CarouselItem, Image, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import carousel1 from "../../../../assets/presentation/cct/1.png"
import carousel2 from "../../../../assets/presentation/cct/2.png"
import carousel3 from "../../../../assets/presentation/cct/3.png"
import carousel4 from "../../../../assets/presentation/cct/4.png"
import carousel5 from "../../../../assets/presentation/cct/5.png"
import carousel6 from "../../../../assets/presentation/cct/6.png"



const Carrusel = () => {
  const [images] = useState([
    {
      id: 2,
      src: carousel1,
    },
    {
      id: 3,
      src: carousel2,
    },
    {
      id: 4,
      src: carousel3,
    },
    {
      id: 5,
      src: carousel4,
    },
    {
      id: 6,
      src: carousel5,
    },
    {
      id: 7,
      src: carousel6,
    },
  ]);

  return (
<Container>
  <Carousel>
    {images.map((image) => (
      <CarouselItem key={image.id}>
        {/* Ajustes para centrar y hacer responsiva la imagen */}
        <Image
          src={image.src}
          alt={image.title}
          style={{
            display: "block",          // Asegura que la imagen sea un bloque
            margin: "0 auto",          // Centra la imagen horizontalmente
            maxWidth: "100%",          // Limita el ancho de la imagen al tamaño del contenedor
            maxHeight: "50vh",         // Ajusta la altura máxima para que se mantenga visible
            objectFit: "contain",      // Escala la imagen para que se ajuste sin cortarla
            borderRadius: "20%",       // Conserva las esquinas redondeadas
          }}
        />
        {/* Estilizado del texto */}
        <Carousel.Caption style={{ textShadow: "orange 2px 2px 5px" }}>
          <h3>{image.title}</h3>
        </Carousel.Caption>
      </CarouselItem>
    ))}
  </Carousel>
</Container>

  );
};

export default Carrusel;
