import React from "react";
import "../styles.css";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText'
import Masonry from '../blocks/Components/Masonry/Masonry'
import drone1 from "../assets/drone1.jpg";
import drone2 from "../assets/drone2.jpg";
import drone3 from "../assets/drone3.jpg";
import drone4 from "../assets/drone4.jpg";
import drone5 from "../assets/drone5.jpg";
import drone6 from "../assets/drone6.jpg";
import drone7 from "../assets/drone7.jpg";
import drone8 from "../assets/drone8.jpg";
import drone9 from "../assets/drone9.jpg";
import drone10 from "../assets/drone10.jpg";

const data = [
    { id: 1, image: drone1, height: 400 },
    { id: 2, image: drone2, height: 400 },
    { id: 3, image: drone3, height: 400 },
    { id: 4, image: drone4, height: 400 },
    { id: 5, image: drone5, height: 400 },
    { id: 6, image: drone6, height: 400 },
    { id: 7, image: drone7, height: 400 },
    { id: 8, image: drone8, height: 400 },
    { id: 9, image: drone9, height: 400 },
    { id: 10, image: drone10, height: 400 },
];

function TextePresentation() {
    return (
        <section className="conteneur-texte-pres">
            <div className="presentation-globale">
                <p className="montserrat-regular ">Bonjour ! Moi, c'est Loris et je suis actuellement en troisième et dernière
                    année de <strong>BUT Métiers du Multimédia et de l’Internet (MMI)</strong>. Passionné par <strong>le numérique, l’informatique et les
                        nouvelles technologies</strong>, j’ai toujours aimé <strong>créer et expérimenter visuellement</strong>, en apportant ma touche
                    personnelle.
                </p>
                <p className="montserrat-regular">Bien avant ma formation, en 2019, je m’intéressais déjà au <strong>design</strong> et au
                    <strong> web</strong> : avec mon drone, je <strong>photographiais des paysages</strong> vus du ciel, puis je stockais mes photos sur mon
                    <strong> site personnel</strong> créé avec Wix. C’est en voulant aller plus loin, <strong>maîtriser pleinement l’aspect technique</strong>,
                    que j’ai décidé d’<strong>apprendre à coder</strong> (mais ça, j’en parle dans la partie « Mon parcours »).</p>
                <p className="montserrat-regular">En dehors de tout ça, je passe aussi du temps à jouer aux <strong>jeux vidéo</strong> de
                    manière occasionnelle, principalement pour me détendre et passer du temps avec des amis. J’aime également
                    regarder des <strong>vidéos</strong> et <strong>documentaires</strong>, lire l’<strong>actualité</strong> et suivre ce qui se passe sur les <strong>réseaux sociaux</strong>.
                    Quand je peux, je sors faire du <strong>vélo</strong>, <strong>nager</strong> ou jouer au <strong>tennis</strong>.</p>
            </div>
            <div className="conteneur-masonry">
                <div className="fondMasonry"></div>
                <h3 className="bebas-neue-italic" style={{ color: 'white' }}>Quelques clichés capturés avec mon drone :</h3>
                <Masonry data={data} />
            </div>
            <div className="mon-parcours">
                <h2 className="montserrat-bold titre-paragraphe">
                    <GradientText
                        colors={["#327dde", "#c0dcff", "#327dde", "#c0dcff", "#327dde"]}
                        animationSpeed={8}
                        showBorder={false}
                    >
                        Mon parcours
                    </GradientText>
                </h2>
                <hr className="separateur-paragraphe-bleu" />
                <p className="montserrat-regular">
                    Issu d’un <strong>baccalauréat général</strong> avec option <strong>Anglais Monde Contemporain</strong> et <strong>Numérique et Sciences de l’Informatique</strong>,
                    j’ai décidé en 2022 d’intégrer la formation <strong>BUT MMI à l’IUT de Blois </strong>
                    (Université de Tours). Après une première année en tronc commun, j’ai décidé de me spécialiser dans le
                    <strong> développement Web</strong>, un domaine qui lie mes deux <strong>passions</strong> : l’<strong>informatique</strong> et le <strong>design graphique</strong>. Dans
                    le développement Web, je vois un moyen de <strong>programmer</strong> tout en visualisant une <strong>interface graphique et
                        interactive</strong> avec une grande <strong>liberté d’action</strong>.
                </p>
                <p className="montserrat-regular">
                    Au cours des deux années suivantes, j’ai pu réaliser des <strong>projets universitaires</strong> : <strong>création et administration
                        de sites web</strong> avec la <strong>communication</strong>, le <strong>marketing</strong> et la <strong>gestion de projet</strong> qui accompagne ce processus. Mais
                    j’ai également eu des <strong>projets personnels</strong>, comme la création d’un <strong>site WordPress</strong> pour une amie décoratrice
                    d’intérieur et le <strong>développement de mon site portfolio</strong> (from scratch) sur lequel vous lisez ces lignes actuellement.
                </p>
                <p className="montserrat-regular">
                    En fin de deuxième année, j’ai eu la chance de <strong>réaliser un stage</strong> au sein de <strong>SAFRAN Electronics & Defense </strong>
                    sur le site de Massy, dans l’Essonne. Pendant ce stage de deux mois, j’ai assisté mon tuteur sur
                    la <strong>gestion du portail client</strong> et j’ai <strong>développé une interface web</strong> permettant de créer
                    des factures automatiquement à partir d’une base Excel. Ce stage m’a permis pour la première fois d’<strong>intégrer
                        le monde du travail</strong> et d’<strong>avoir un rôle à jouer</strong>. En troisième année de formation, mon tuteur de stage m’a
                    proposé de <strong>poursuivre mon travail en alternance</strong>, ce que j’ai accepté. Cet apprentissage est passé au <strong>niveau
                        supérieur</strong> : avec ce contrat d’un an, j’ai eu l’occasion de continuer l’administration du portail client avec
                    une<strong> plus grande place</strong> dans ce projet, tout en continuant de développer des solutions informatiques dans le
                    but d’<strong>accélérer des processus internes</strong>.
                </p>
            </div>
            <div className="et-la-suite">
                <h2 className="montserrat-bold titre-paragraphe">
                    <GradientText
                        colors={["#327dde", "#c0dcff", "#327dde", "#c0dcff", "#327dde"]}
                        animationSpeed={8}
                        showBorder={false}
                    >
                        Et la suite ?
                    </GradientText>
                </h2>
                <hr className="separateur-paragraphe-bleu" />
                <p className="montserrat-regular">
                    À l'issue de cette dernière année en MMI, j'ai choisi de <strong>poursuivre mes études </strong>
                    avec un <strong>Mastère</strong> (Bac+5) dans le développement Web, de préférence spécialisé en
                    <strong> front-end</strong>. Bien que ma formation actuelle soit professionnalisante, je ressens
                    le besoin de <strong>me concentrer</strong> sur un domaine qui <strong>me passionne</strong>, et je
                    suis <strong>plus que motivé</strong> pour atteindre un haut niveau d'<strong>expertise</strong>.
                </p>
            </div>

        </section>
    )
}

export default TextePresentation;