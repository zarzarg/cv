import React from "react";
import "../styles/presentation.css";
import '../fonts/Italianno/Italianno-Regular.ttf';
import '../fonts/Romanesco/Romanesco-Regular.ttf';

const Presentation = () => {
    return (
        <>
            <div className="desc">
                <h1 className="presentationTitle">Raphaël Boccanfuso</h1>
                <span className="typing1">Bonjour, je m'appelle Raphaël Boccanfuso, j'ai 31 ans et je suis originaire de Corse</span>
                <span className="typing2">J'ai réalisé l'intégralité de mes études en Corse : le collège et le lycée à Ajaccio et l'université à Corte</span>
                <span className="typing3">J'ai obtenu une licence en Biologie Environnement et Écologie en 2014</span>
                <span className="typing4">Après de nombreuse années à travailler dans des emplois alimentaires, j'ai décidé de me reconvertir dans le Développement Web</span>
                <span className="typing5">J'ai trouvé la voie professionnelle qui me passionne en obtenant un Bac+2 avec mention en 2021</span>
                <span className="typing6">Je poursuivrai cette reconversion professionnelle de façon à m'épanouir </span>
            </div>
        </>
    )
};

export default Presentation
