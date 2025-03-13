import React from "react";
import "../styles.css";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText'
import iBrainIMG1 from '../assets/iBrain1.png'
import iBrainIMG2 from '../assets/iBrain2.png'
import iBrainIMG3 from '../assets/iBrain3.png'

function SectionIBrain() {
    return (
        <section className="conteneurIBrain">
            <div className="fondIBrain"></div>
            <h2 className="bebas-neue-regular titre-paragraphe">
                <GradientText
                    colors={["#ffffff", "#016cec", "#ffffff", "#016cec", "#ffffff"]}
                    animationSpeed={8}
                    showBorder={false}
                >
                    iBrain : Equipe "Autisme"
                </GradientText>
            </h2>
            <hr className="separateur-titre-projet" />
            <div className="texte-image-droite-conteneur">
                <div className="conteneur-textesProjet">
                    <div>
                        <h4 className="titreIBrain montserrat-bold">Contexte :</h4>
                        <p className="texteIBrain montserrat-regular">
                            Dans le cadre d’un projet universitaire, nous avons développé, en équipe de trois, un site internet pour l’équipe "Autisme" de
                            l’Unité Mixte de Recherche INSERM Imagerie et Cerveau à Tours, en collaboration avec l’IUT de Blois. Ce site vise à rendre les
                            recherches de l’équipe accessibles à la fois au grand public et aux scientifiques.<br /><br />
                            Il se compose de deux sections distinctes : une partie vulgarisation qui présente les chiffres clés accompagnés de visuels animés
                            pour faciliter la compréhension, et une partie scientifique intégrant un système de data visualisation interactif. Ce dernier
                            repose sur un fichier Excel servant de base de données et permet d’explorer les paramètres oculométriques analysés par l’équipe
                            via des graphiques et tableaux dynamiques.
                        </p>
                    </div>
                </div>
                <div className="conteneur-image-projet">
                    <img src={iBrainIMG1} className="imageProjetIBrain" />
                </div>
            </div>
            <div className="texte-image-gauche-conteneur">
                <div className="conteneur-textesProjet">
                    <div>
                        <h4 className="titreIBrain montserrat-bold">Contraintes :</h4>
                        <ul className="texteIBrain montserrat-regular">
                            <li className="point-liste">La page d’accueil doit présenter le contexte du projet, expliquer le fonctionnement de l’eye-tracking et
                                son rôle dans le domaine médical, ainsi que mettre en avant la collaboration.</li>
                            <li className="point-liste">Une expérience d’eye-tracking menée sur le site doit permettre d’optimiser son ergonomie en fonction des
                                données recueillies (comportement des yeux).</li>
                            <li className="point-liste">Le site doit être responsive, conçu en mobile first et avoir une séparation nette entre la partie
                                vulgarisation et la partie scientifique.</li>
                            <li className="point-liste">Les visuels animés doit rendre les données et les concepts plus accessibles au grand public.</li>
                        </ul>
                    </div>
                </div>
                <div className="conteneur-image-projet">
                    <img src={iBrainIMG2} className="imageProjetIBrain" />
                </div>
            </div>
            <div className="texte-image-droite-conteneur">
                <div className="conteneur-textesProjet">
                    <div>
                        <h4 className="titreIBrain montserrat-bold">Langages / Technologies :</h4>
                        <ul className="texteIBrain montserrat-regular">
                            <li className="point-liste">HTML, CSS et Bootstrap pour le développement du site en mobile first.</li>
                            <li className="point-liste">Chart.JS pour la data visualisation interactive, permettant d’afficher des graphiques et tableaux
                                basés sur un fichier Excel.</li>
                            <li className="point-liste">Utilisation d’eye-trackers (caméras infrarouges avec capteurs) avec analyse des mouvements oculaires
                                avec des logiciels.</li>
                        </ul>
                    </div>
                </div>
                <div className="conteneur-image-projet">
                    <img src={iBrainIMG3} className="imageProjetIBrain" />
                </div>
            </div>
            <div className="conteneur-enfonce-iBrain">
                <h4 className="style-titre-enfonce titreIBrain montserrat-bold">Mon rôle :</h4>
                <p className="style-txt-enfonce texteIBrain montserrat-regular">
                    Mon rôle était de développer la page d’accueil et la page destinée au grand public (incluant le header et le footer), tandis que mes
                    coéquipiers se chargeaient de la partie scientifique. J’ai dû suivre la structure globale du site définie dans la maquette et respecter
                    la charte graphique, que j’avais moi-même réalisée.<br /><br />
                    Mon objectif était de rendre le site accessible et compréhensible pour tous, en veillant à la lisibilité et à l’organisation du contenu.
                    J’ai également créé les visuels animés pour la partie grand public, ainsi que le contenu textuel associé à cela.
                </p>
            </div>
        </section>
    );
}

export default SectionIBrain;
