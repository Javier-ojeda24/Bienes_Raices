import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export const Navegacion = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const refNav = useRef();
  const refMenu = useRef();
  const refBtnToggle = useRef();
  const refIcon = useRef();

  const handleToggle = () => {
    if (menuToggle) {
      setMenuToggle(false);
      refMenu.current.style.top = "-100%";
      refIcon.current.classList.replace("bi-x-lg", "bi-list");
    } else {
      setMenuToggle(true);
      const calculate =
        refNav.current.offsetTop + refNav.current.clientHeight - 1;
      refMenu.current.style.top = calculate + "px";
      refIcon.current.classList.replace("bi-list", "bi-x-lg");
    }
  };

  return (
    <div className="navContainer">
      <nav ref={refNav} className="nav">
        <button onClick={handleToggle} ref={refBtnToggle} className="btnToggle">
          <i ref={refIcon} className="bi bi-list fs-1"></i>
        </button>

        <ul className="ul" ref={refMenu}>
          <li>
            <h1 className="logo-h1">Lotes Financiado</h1>
          </li>
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/sobre-nosotros">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
