import React from "react";
import "../styles.css";
import logoToeic from "../assets/toeic.png";
import iconeScrum from "../assets/scrum.png";
import logoExcel from "../assets/excel.png";
import logoPbi from "../assets/pbi.png";

function IconesLanguesAutres() {
    return (
        <section className="conteneur-icones-lang">
            <img src={logoToeic} alt="Logo TOEIC" className="iconeLangAutr" />
            <img src={iconeScrum} alt="Méthode agile Scrum" className="iconeLangAutr" />
            <img src={logoExcel} alt="Logo Excel" className="iconeLangAutr" />
            <img src={logoPbi} alt="Logo Power BI" className="iconeLangAutr" />
        </section>
    );
}

export default IconesLanguesAutres;
