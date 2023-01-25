import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../assets/logo.png";

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
            <a href="#">
              {" "}
              <img className="logoImg"  src={logo} alt="logo" />
            </a>
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
