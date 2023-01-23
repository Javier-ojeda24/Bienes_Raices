import React from "react";
import { NavLink } from "react-router-dom";

export const Navegacion = () => {
  return (
    <div className="flex items-center justify-center flex-wrap bg-teal-500 p-6">
      <NavLink to="/inicio">Inicio</NavLink>
      <NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </div>
  );
};
