import pfp from "../pfp.png";
import React from "react";
import "../styles.css";
import TiltedCard from '../blocks/Components/TiltedCard/TiltedCard';
import Nom3D from "../components/Nom3D";


function ProfilNom() {
    return (
        <section className="conteneur-profil-nom">
            <TiltedCard
                imageSrc={pfp}
                altText="Loris NEVE"
                captionText="C'est moi"
                containerHeight="200px"
                containerWidth="200px"
                imageHeight="200px"
                imageWidth="200px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={false}
            />
            <div style={{ marginLeft: "20px", position: "relative", width: "200px", height: "100%" }}>
                <Nom3D />
            </div>
        </section>
    )
}

export default ProfilNom;