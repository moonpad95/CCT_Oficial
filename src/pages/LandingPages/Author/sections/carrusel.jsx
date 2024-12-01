/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
// eslint-disable-next-line react/prop-types
const Carrusel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <div>
      <img src={images[index]} />
      <div>
        {images.map((image, i) => (
          // eslint-disable-next-line react/button-has-type
          <button key={i} onClick={() => handleClick(i)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
