import React from "react";
import { NavLink } from "react-router-dom";

export const Navegacion = () => {
  return (
    <>
      <NavLink to="/inicio">Inicio</NavLink>
      <NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </>
  );
};
