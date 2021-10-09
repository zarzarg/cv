import React from "react";
import "../styles/langage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faHtml5, faCss3Alt, faSass, faPhp, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons';

const Langage = () => {
    return (
        <>
            <div className="wrapperComp">
            <h1 className="competence">Compétences</h1>
                <div className="logiciel">
                    <h2>Logiciels et Technologies</h2>
                        <p>JAMstack (Gatsby, Sanity, GraphiQL, Netlify)</p>
                        <p>Visual studio code</p>
                        <p>NetBeans</p>
                        <p>Balsamique Mockup 3</p>
                        <p>Github, Gitlab</p>
                        <p>XAMP</p>
                        <p>Trello</p>
                        <p>Eclipse</p>
                        <p>Pack Office</p>
                        <p>PHPMyAdmin</p>
                </div>
                <div class="container">
                    <span class="react-logo">
                        <span class="nucleo"></span>
                    </span>
                    <FontAwesomeIcon icon={faHtml5} className="html" />
                    <FontAwesomeIcon icon={faCss3Alt} className="css" />
                    <FontAwesomeIcon icon={faSass} className="sass" />
                    <FontAwesomeIcon icon={faJs} className="js" />
                    <FontAwesomeIcon icon={faPhp} className="php" />
                    <FontAwesomeIcon icon={faJava} className="java" />
                    <FontAwesomeIcon icon={faNodeJs} className="node" />
                </div>
                <div className="langage">
                    <h2>Langages informatique</h2>
                        <p>HTML5</p>
                        <p>CSS</p>
                        <p>Sass</p>
                        <p>Javascript</p>
                        <p>React.Js</p>
                        <p>PHP</p>
                        <p>Java</p>
                        <p>GraphQL</p>
                        <p>MySQL</p>
                        <p>Python</p>
                </div>
                <div className="langue">
                    <h2>Linguistique</h2>
                        <p>Français : Langue maternelle</p>
                        <p>Anglais : Technique opérationnel</p>
                </div>
            </div>
        </>
    )
};

export default Langage