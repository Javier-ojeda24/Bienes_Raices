import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Inicio } from "../components/Inicio";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <NavLink>
        <ul>
          <li to="/inicio">Inicio</li>
          <li to="/sobre-nosotros">Sobre Nosotros</li>
          <li to="/contacto">Contacto</li>
        </ul>
      </NavLink>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
       
      </Routes>
    </BrowserRouter>
  );
};
