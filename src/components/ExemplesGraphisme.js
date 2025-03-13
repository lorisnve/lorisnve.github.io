import React from "react";
import "../styles.css";
import logoAliceD from "../assets/aliced.png";
import logoNextgen from "../assets/nextgen.png";
import logoLetzgo from "../assets/letzgo.png";
import afficheJPO from "../assets/afficheJPO.jpg";

function ExemplesGraphisme() {
    return (
        <section className="conteneur-exemples-graph">
            <div className="conteneur-logos">
                <img src={logoLetzgo} alt="Logo Letzgo" className="logoGraph letzgo" />
                <div className="logos-bas">
                    <img src={logoNextgen} alt="Logo Nextgen" className="logoGraph nextgen" />
                    <img src={logoAliceD} alt="Logo AliceD" className="logoGraph aliced" />
                </div>
            </div>
            <div className="conteneur-affiche">
                <img src={afficheJPO} alt="Affiche JPO" className="affiche-jpo" />
            </div>
        </section>
    );
}

export default ExemplesGraphisme;
