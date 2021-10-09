import React from "react";
import "../styles/loisirs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwimmer, faFootballBall, faShip, faHeadset, faRunning, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const Loisirs = () => {
    return (
        <div className="wrapperCentreInteret">
            <h1 className="loisirTitle" >Centre d'intérêts & Contact</h1>
            <div className="containerLoisirContact">
                <div className="wrapperLoisir">
                    <div className="wrapperInteret">
                        <div className="wrapperSport">
                            <h2 className="sport">Sport</h2>
                            <h3 ><FontAwesomeIcon icon={faSwimmer} style={{ color: "lightskyblue", fontSize: "24px" }} /> Natation</h3>
                            <p>Pratiquée 7 ans en compétition</p>
                            <p>(3ième aux championnats d'Ile de France Junior).</p>
                            <h3 ><FontAwesomeIcon icon={faFootballBall} style={{ color: "lightskyblue", fontSize: "24px" }} /> Rugby</h3>
                            <p>Pratiqué 8 ans en compétition</p>
                            <p>(Équipe régionale Corse).</p>
                        </div>
                        <div className="containLoisir">
                            <h2 className="loisir">Loisirs</h2>
                            <p><FontAwesomeIcon icon={faShip} style={{ color: "lightskyblue", fontSize: "24px" }} /> Nautisme (titulaire permis Mer)</p>
                            <p><FontAwesomeIcon icon={faHeadset} style={{ color: "lightskyblue", fontSize: "24px" }} /> Gaming</p>
                            <p><FontAwesomeIcon icon={faRunning} style={{ color: "lightskyblue", fontSize: "24px" }} /> Randonnée</p>
                        </div>
                    </div>
                </div>
                <div className="wrapperContact">
                    <h2 className="contact">Me contacter</h2>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "lightskyblue", fontSize: "24px" }} />
                        <address>
                        <br></br><a href="mailto:raphael.boccanfuso@gmail.com">raphael.boccanfuso@gmail.com</a><br></br>
                        </address>
                    </div>
                    <div>
                    <br></br><FontAwesomeIcon icon={faPhone} style={{ color: "lightskyblue", fontSize: "24px" }} />
                        <address>
                        <br></br><a href="tel:+33646435853">06 46 43 58 53</a><br></br>
                        </address>
                    </div>
                    <h3>Adresse postale</h3>
                    <p>13 rue de l'église<br></br>
                        60260 Lamorlaye</p>
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/rapha%C3%ABl-boccanfuso/">Raphaël Boccanfuso</a>
                </div>
            </div>
        </div>
    )
};

export default Loisirs