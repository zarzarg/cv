import React from "react";
import Licence from "../asset/Licence-1.jpg";
import Deug from "../asset/DEUG-page-001.jpg";
import Bac from "../asset/BACSTL-page-001.jpg";
import '../styles/formation.css';
const Formation = () => {
    
    return (
        <>
            <div className="wrapperForm">
                <div className="formation">
                    <h1>Formations</h1>
                    <div className="diplomeWrapper">
                        <h3 className="diplome">BAC +3/+4 Concepteur Développeur d’Applications</h3> 
                        <div className="ecole">2I TECH Academy - Bordeaux</div>
                        <div className="years">2021-2023 durée 24 mois</div>
                    </div>
                    <div className="diplomeWrapper">
                        <h3 className="diplome">BAC +2 Développeur d’applications Web et mobile</h3> 
                        <div className="ecole">Aflokkat - Ajaccio</div>
                        <div className="years">2020-2021</div>
                    </div>
                    <div className="diplomeWrapper">
                        <h3 className="diplome">Licence 3 Biologie Environnement et Ecologie</h3> 
                        <div className="ecole">Université de Corse - Corte</div>
                        <div className="years">2013-2014</div> 
                    </div>
                    <div className="diplomeWrapper">
                        <h3 className="diplome">DEUG Biologie Environnement et Ecologie</h3> 
                        <div className="ecole">Université de Corse - Corte</div>
                        <div className="years">2012-2013</div>
                    </div>
                    <div className="diplomeWrapper">
                        <h3 className="diplome">Baccalauréat Sciences et Technologies de Laboratoires</h3> 
                        <div className="ecole">Lycée Fesch - Ajaccio</div>
                        <div className="years">2008 – 2009</div>
                    </div>
                </div>
                <div id="slider">
                    <div class="slideshow-container">
                        <div class="mySlides">
                            <img src={Bac} alt="" className="BacSTL"/>
                        </div>
                        <div class="mySlides">
                            <img src={Deug} alt="" className="DEUG"/>
                        </div>
                        <div class="mySlides">
                            <img src={Licence} alt="" className="Licence"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Formation