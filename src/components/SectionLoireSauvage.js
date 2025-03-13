import React from "react";
import "../styles.css";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText'
import loireSauvageIMG1 from '../assets/loiresauvage1.png'
import loireSauvageIMG2 from '../assets/loiresauvage2.png'
import loireSauvageIMG3 from '../assets/loiresauvage3.png'


function SectionLoireSauvage() {
    return (
        <section className="conteneurLoireSauvage">
            <h2 className="bebas-neue-regular titre-paragraphe">
                <GradientText
                    colors={["#000000", "#016cec", "#000000", "#016cec", "#000000"]}
                    animationSpeed={8}
                    showBorder={false}
                >
                    Loire Sauvage
                </GradientText>
            </h2>
            <hr className="separateur-titre-projet" />
            <div className="texte-image-droite-conteneur">
                <div className="conteneur-textesProjet">
                    <div>
                        <h4 className="titreProjet montserrat-bold">Contexte :</h4>
                        <p className="texteProjet montserrat-regular">
                            Loire Sauvage est une association fictive créée dans le cadre d’un projet universitaire.
                            Son objectif est de sensibiliser à la préservation de la faune et de la flore du Val de
                            Loire. Elle propose des parcours découverte (à pied, à vélo et en canoë-kayak) ainsi que
                            des ateliers de formation sur la biodiversité locale. <br />
                            Dans ce contexte, notre équipe de trois développeurs a été chargée de concevoir et développer
                            une plateforme fonctionnelle et intuitive, facilitant la communication de l’association, les
                            inscriptions aux activités, ainsi que les adhésions et dons.
                        </p>
                    </div>
                </div>
                <div className="conteneur-image-projet">
                    <img src={loireSauvageIMG1} className="imageProjet" />
                </div>
            </div>
            <div className="texte-image-gauche-conteneur">
                <div className="conteneur-textesProjet">
                    <div>
                        <h4 className="titreProjet montserrat-bold">Contraintes :</h4>
                        <ul className="texteProjet montserrat-regular">
                            <li className="point-liste">Le site doit être fonctionnel, responsive et offrir une expérience utilisateur optimale.</li>
                            <li className="point-liste">Il doit être facilement administrable pour la gestion des contenus (actualités, services, calendriers d’activités).</li>
                            <li className="point-liste">Il permet l’inscription et la réservation en ligne pour les parcours et ateliers.</li>
                            <li className="point-liste">Le site offre un système de classement des activités selon leur popularité (nombre de "j’aime").</li>
                            <li className="point-liste">L’association cible principalement un public local (familles, scolaires, résidents de la Touraine), mais aussi des touristes et partenaires institutionnels.</li>
                        </ul>
                    </div>
                </div>
                <div className="conteneur-image-projet">
                    <img src={loireSauvageIMG2} className="imageProjet" />
                </div>
            </div>
            <div className="texte-image-droite-conteneur">
                <div className="conteneur-textesProjet">
                    <div>
                        <h4 className="titreProjet montserrat-bold">Langages / Technologies :</h4>
                        <ul className="texteProjet montserrat-regular">
                            <li className="point-liste">HTML, CSS, JavaScript (développement en mobile first avec Bootstrap pour assurer le responsive).</li>
                            <li className="point-liste">Bibliothèque JavaScript AOS pour les animations.</li>
                            <li className="point-liste">PHP avec une base de données pour la partie du backoffice (gestion des réservations et adhésions).</li>
                            <li className="point-liste">Hébergement temporaire sur Alwaysdata (le site n’est plus en ligne).</li>
                        </ul>
                    </div>
                </div>
                <div className="conteneur-image-projet">
                    <img src={loireSauvageIMG3} className="imageProjet" />
                </div>
            </div>
            <div className="conteneur-enfonce">
                <h4 className="style-titre-enfonce montserrat-bold">Mon rôle :</h4>
                <p className="style-txt-enfonce montserrat-regular">
                    Dans l’équipe, nous étions deux à nous charger du front du site, tandis que notre troisième coéquipier s’occupait du développement du back-office.
                    J’ai personnellement développé environ 75 % du front, mon binôme s’occupant du reste en plus de la gestion de projet. J’ai réalisé les pages Accueil,
                    Environnement, À propos, Contact et Adhésion. Avant de coder, j’ai dû adapter mes plans à la charte graphique et aux maquettes (établies en groupe)
                    tout en conservant un style reconnaissable pour ce type de site.
                </p>
            </div>
        </section>
    );
}

export default SectionLoireSauvage;