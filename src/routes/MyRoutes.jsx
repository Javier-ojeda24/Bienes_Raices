import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacto } from "../components/Contacto";
import { Error } from "../components/Error";
import { Inicio } from "../components/Inicio";
import { Navegacion } from "../components/Navegacion";
import { SobreNosotros } from "../components/SobreNosotros";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Navegacion />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
