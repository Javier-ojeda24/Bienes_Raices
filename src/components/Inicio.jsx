import React from "react";
import { Link } from "react-router-dom";
export const Inicio = () => {
  return (
    <div>
      <h1>
        ¿Estás buscando un lugar para construir tu futuro? ¡Compra un terreno
        con nosotros hoy!
      </h1>
      <button>
        <Link to="/lotes">Aca puedes ver</Link>{" "}
      </button>
      
    </div>
  );
};
