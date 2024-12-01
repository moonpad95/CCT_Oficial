/* eslint-disable react/self-closing-comp */
import React from "react";

function Formulario() {
  return (
    <div className="container">
      <h1>Solicitud de ingreso a InvernaTec</h1>
      <h3 className="text-dark">
        En caso de estar interesado, envíe su solicitud a Cultive Care Technologies llenando el
        formulario inferior
      </h3>
      <form
        target="_blank"
        action="https://formsubmit.co/luishernandes2.jlh@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div className="col mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Descripcion general"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-success btn-block mt-5 mb-3">
          Enviar mi solicitud
        </button>
      </form>
    </div>
  );
}
export default Formulario;
