import React from "react";
import "./Encabezado.css";

const Encabezado = () => {
  return (
    <div className="Encabezado">
      <div className="Wrapper">
        <div className="Logo">&#129426;</div>
        <div className="Right">
          <div className="ocpiones">
            <a>About</a>
            <a>Work</a>
            <a>Contact</a>
          </div>
          <div className="contacto">
            <button>Twitter</button>
            <button>Linkedin</button>
            <button>GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encabezado;
