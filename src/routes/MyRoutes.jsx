import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Inicio } from "../components/Inicio";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
};
