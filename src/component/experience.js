import React from "react";
import "../styles/experience.css";
import plusquenet from '../asset/plusquenet.jpg';
import mondange from '../asset/mondange.jpg';

const Experience = () => {
    return (

        <div className="wrapperExp">
            <h1 className="exp">Expériences professionnelle</h1>
            <div className="experience">
                <div className="exp1">
                    <h2 className="poste">Développeur web Front-end</h2>
                    <h3 className="lieu">Koalità - Ajaccio 2A </h3>
                    <div className="date">CDD - Mars 2021 - Juillet 2021</div>
                    <div className="mission"> 
                        <p>Développement de sites Internet Front-end</p>
                        <p>Réalisation de recettes de sites Internet Client</p>
                        <p>Utilisation de Javascript, HTML, CSS, SASS, React-Js, JAMstack</p>
                    </div>
                </div>
                <div className="exp2">
                    <h2 className="poste">Livreur de mobilier de luxe</h2>
                    <h3 className="lieu">TPS - Ajaccio 2A </h3>
                    <div className="date">CDI - Juillet 2018 - Juillet 2020</div>
                    <div className="mission"> 
                        <p>Etablissement un circuit de livraison</p>
                        <p>Relationnel client et gestion des litiges</p>
                        <p>Vérification de conformité</p>
                    </div>
                </div>
                <div className="exp3">
                    <h2 className="poste">Chef de dépôt</h2>
                    <h3 className="lieu">SOCIDI - Casaglione 2A </h3>
                    <div className="date">CDD reconduit plusieurs fois - Mai 2008 - Mars 2018</div>
                    <div className="mission"> 
                        <p>Management des équipes de livraison</p>
                        <p>Planification de l’activité</p>
                        <p>Promouvoir les produits de l'entreprise</p>
                    </div>
                </div>
            </div>
            <div className="realisation">
                <a href="https://vitres-plusquenet.fr/"><img src={plusquenet} alt="plusquenet" className="plusquenet"></img><p>Plus que Net</p></a>
                <h1>Réalisation</h1>
                <a href="https://mondange.gatsbyjs.io/"><img src={mondange} alt="mondange" className="mondange"></img><p>Domaine Mondange</p></a>
            </div>
        </div>
    )
};

export default Experience
