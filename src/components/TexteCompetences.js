import React from "react";
import "../styles.css";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText'
import DecryptedText from '../blocks/TextAnimations/DecryptedText/DecryptedText'
import LogoScroller from './LogoScroller'
import ExemplesGraphisme from './ExemplesGraphisme'
import IconesLanguesAutres from './IconesLanguesAutres'

function TexteCompetences() {
    return (
        <section className="conteneur-texte-comp">
            <div className="informatique-web">
                <h2 className="pressStart2P titre-paragraphe">
                    <DecryptedText
                        text="Informatique & Web"
                        animateOn="view"
                        revealDirection="start"
                    />
                </h2>
                <hr className="separateur-paragraphe-noir" />
                <p className="montserrat-regular ">
                    Comme je l’ai expliqué dans ma présentation, je suis spécialisé dans le développement front-end. J’aime beaucoup travailler sur
                    l’apparence des sites, innover tout en gardant quelque chose de simple et moderne. J’utilise principalement HTML5, CSS3 et du JavaScript,
                    avec des frameworks comme React et Bootstrap pour structurer et améliorer l’interactivité des pages. J’accorde aussi une attention particulière
                    à l’expérience utilisateur et j’utilise Figma pour réaliser mes maquettes. En troisième année de BUT MMI, j’ai découvert A-Frame et Three.js, qui
                    permettent d’ajouter de la 3D sur un site. On a vu les bases en cours, mais un Mastère me permettrait d’approfondir ce domaine et d’aller plus loin
                    dans l’animation et l’interaction sur le web.
                </p>
                <p className="montserrat-regular">
                    Même si je préfère le front-end, je sais aussi faire du développement back-end avec PHP et gérer une base de données en SQL. J’ai déjà eu des
                    projets avec Laravel (MMI2) et Symfony (MMI3) pour structurer des backoffice.
                </p>
                <p className="montserrat-regular">
                    Grâce à mon alternance, j’ai aussi développé des compétences supplémentaires sur WordPress, notamment la gestion et l’administration
                    d’un site à grande échelle avec plusieurs milliers d’utilisateurs. J’ai appris à organiser le contenu et gérer les accès tout en
                    aillant une communication claire avec les différents prestataires (développeurs et hébergeurs). A propos d’hébergement, j’ai aussi
                    l’occasion de créer et gérer des serveurs ainsi que de mettre en ligne mes sites.
                </p>
                <LogoScroller />
            </div>
            <div className="graphisme-audiovisuel">
                <h2 className="syncopate-bold titre-paragraphe">
                    <GradientText
                        colors={["#000000", "#016cec", "#000000", "#016cec", "#000000"]}
                        animationSpeed={8}
                        showBorder={false}
                    >
                        Graphisme & Audiovisuel
                    </GradientText>
                </h2>
                <hr className="separateur-paragraphe-noir" />
                <p className="montserrat-regular">
                    Je ne suis pas en parcours communication ou création graphique, mais je sais créer une identité visuelle pour mes projets. J’ai
                    déjà réalisé des affiches, logos, magazines et autres supports, en utilisant InDesign, Illustrator et Photoshop pour la mise en
                    page, la création graphique et la retouche d’images. Pour l’audiovisuel, j’ai quelques bases en montage vidéo et animation. J’ai
                    déjà utilisé Premiere Pro et After Effects, mais ce n’est pas mon domaine principal.
                </p>
                <p className="montserrat-regular">
                    Dans mes projets, j’essaie de faire attention à la manière dont je les présente en fonction du contexte et du public visé, tout
                    en ajoutant ma touche personnelle.
                </p>
                <section className="conteneur-titre-exemples">
                    <p className="bebas-neue-italic titre-exemples-graph">
                        Quelques exemples de logos et affiche :
                    </p>
                    <hr className="separateur-titre-exemples"></hr>
                    <ExemplesGraphisme />
                </section>
            </div>
            <div className="langue-autres">
                <h2 className="cormorant-sc-bold titre-paragraphe">
                    <GradientText
                        colors={["#000000", "#daac04", "#000000", "#daac04", "#000000"]}
                        animationSpeed={8}
                        showBorder={false}
                    >
                        Langues & Autres
                    </GradientText>
                </h2>
                <hr className="separateur-paragraphe-noir" />
                <p className="montserrat-regular">
                    Je suis souvent exposé à l’anglais, que ce soit à travers les médias, la documentation technique ou les jeux, ce qui m’a permis
                    de comprendre facilement et de tenir une conversation. J’ai également passé le TOEIC, où j’ai obtenu 870 points (niveau B2).
                </p>
                <p className="montserrat-regular">
                    Quand je travaille sur un projet, je commence toujours par fixer des limites et organiser les étapes. J’ai du mal à avancer
                    efficacement quand tout est fait au fur et à mesure sans structure. J’ai des bases en méthodes agiles (Scrum), ce qui m’aide
                    à mieux organiser mon travail et celui de mon équipe.
                </p>
                <p className="montserrat-regular">
                    Grâce à mon alternance, j’ai aussi acquis quelques compétences en gestion et analyse de données sur Excel et Power BI
                    (Business Intelligence), notamment dans le cas de l’étude de la satisfaction client sur un site internet.
                </p>
                <p className="montserrat-regular">
                    Enfin, j’ai un bon niveau en orthographe et rédaction, ayant atteint le niveau "Excellence" lors de mes entraînements
                    au Projet Voltaire.
                </p>
                <IconesLanguesAutres />
            </div>

        </section>
    )
}

export default TexteCompetences;