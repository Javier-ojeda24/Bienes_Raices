import React from "react";
import { NavLink } from "react-router-dom";

export const Navegacion = () => {
  return (
    <div className="bg-gray-300 flex uppercase">
      <NavLink to="/inicio" className="ml-5">
        Inicio
      </NavLink>
      <NavLink to="/sobre-nosotros" className="ml-5">
        Sobre Nosotros
      </NavLink>
      <NavLink to="/contacto" className="ml-5">
        Contacto
      </NavLink>
    </div>
  );
};
