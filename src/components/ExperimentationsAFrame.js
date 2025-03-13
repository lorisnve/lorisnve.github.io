import React from "react";
import "../styles.css";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText'
import aframeTowerIMG from '../assets/AframeTower.png'
import aframeFlipperGIF from '../assets/flipperAframe.gif'

function SectionExpAFrame() {
    return (
        <section className="conteneurExpAFrame">
            <h2 className="bebas-neue-regular titre-paragraphe">
                <GradientText
                    colors={["#000000", "#016cec", "#000000", "#016cec", "#000000"]}
                    animationSpeed={8}
                    showBorder={false}
                >
                    Expérimentations A-Frame
                </GradientText>
            </h2>
            <hr className="separateur-titre-projet" />
            <div className="conteneur-enfonce" style={{ marginBottom: '30px' }}>
                <h4 className="style-titre-enfonce montserrat-bold">Contexte :</h4>
                <p className="style-txt-enfonce montserrat-regular">
                    Dans le cadre de notre découverte d'A-Frame et Three.js en cours de Dispositifs Interactifs (semestres 5 et 6 de la 3ᵉ année),
                    j’ai choisi de réaliser deux expérimentations / petits projets. Mon objectif était de mieux cerner les possibilités offertes
                    par A-Frame, non seulement lors des travaux pratiques, mais aussi – et surtout – durant mon temps personnel afin d'approfondir le sujet.
                </p>
            </div>
            <div className="texte-image-droite-conteneur">
                <div className="conteneur-textesProjet">
                    <div>
                        <h4 className="titreProjet montserrat-bold">Modélisation d'une tour médiévale :</h4>
                        <p className="texteProjet montserrat-regular">
                            La première expérimentation consistait à créer un monde plat, vide et vaste (comprenant un ciel, un soleil et de l’herbe). L’objectif
                            était d’y construire une tour de style médiéval avec quelques détails (portes, volets, toit), dans laquelle il est possible d’entrer
                            grâce à une porte qui s’ouvre au clic sur la poignée. Le déplacement du personnage (la caméra) est également possible. Cette réalisation
                            m’a permis de me familiariser avec le code lié aux éléments visuels (structures) tout en intégrant un aspect fonctionnel avec des interactions utilisateur.
                        </p>
                    </div>
                </div>
                <div className="conteneur-image-projet">
                    <img src={aframeTowerIMG} className="imageProjet" />
                </div>
            </div>
            <div className="texte-image-gauche-conteneur">
                <div className="conteneur-textesProjet">
                    <div>
                        <h4 className="titreProjet montserrat-bold">Modélisation de bras de flipper :</h4>
                        <p className="texteProjet montserrat-regular">
                            Pour aller plus loin dans les interactions utilisateur, j’ai réalisé un deuxième petit projet : la modélisation d’un flipper 
                            permettant de frapper des boules apparaissant aléatoirement au-dessus. En appuyant sur la touche « J », le bras gauche se 
                            déplace, et de même pour le bras droit avec la touche « L ». Ici, l’aspect visuel n’était pas une priorité (les modèles 
                            restent bruts), mais cette expérimentation m’a permis de mieux comprendre la gestion des collisions entre les boules et 
                            les bras en mouvement (qui, sans le moteur Physics System d’A-Frame et quelques paramètres, laissent passer les boules à 
                            travers) en réponses des interactions avec le clavier.
                        </p>
                    </div>
                </div>
                <div className="conteneur-image-projet">
                    <img src={aframeFlipperGIF} className="imageProjet" />
                </div>
            </div>
        </section>
    );
}

export default SectionExpAFrame;