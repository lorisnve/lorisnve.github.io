import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

import logoLN from "../logoln2.png";
import logoInsta from "../insta.png"
import logoLinked from "../linkedin.png"
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText.jsx';

function Header() {
  return (
    <header className="header">
      <div className="conteneur-logo">
        <Link to="/">
          <img src={logoLN} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul className="liste-navigation">
          <li className="element-navigation">
            <Link to="/" className="lien-navigation">
              <ShinyText text="QUI SUIS-JE ?" disabled={false} speed={3} />
            </Link>
          </li>
          <li className="element-navigation">
            <Link to="/competences" className="lien-navigation">
              <ShinyText text="COMPÉTENCES" disabled={false} speed={3} />
            </Link>
          </li>
          <li className="element-navigation">
            <Link to="/mesprojets" className="lien-navigation">
              <ShinyText text="MES PROJETS" disabled={false} speed={3} />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="conteneur-icones">
        <a href="https://www.instagram.com/loris_nve/">
          <img src={logoInsta} alt="Instagram" className="iconeInsta" />
        </a>
        <a href="https://www.linkedin.com/in/loris-nève/">
          <img src={logoLinked} alt="LinkedIn" className="iconeLinked" />
        </a>
      </div>
    </header>
  );
}

export default Header;
