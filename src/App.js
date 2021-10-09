/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import Presentation from "./component/presentation";
import Langage from "./component/langage";
import Formation from "./component/formation";
import Experience from "./component/experience";
import Loisirs from "./component/loisirs";
import photo from "./asset/photocv.JPG";

import 'normalize.css';
import './App.css';

function App() {
  const [component, setComponent] = useState("presentation");
  return (
    <div className="main">
      <div data-infos>
        <div className="wrapperInfo">
          <div className="info">
            <h1> Raphaël Boccanfuso </h1>
            <p>05/09/1990 - 31 ans</p>
            <p>RQTH Reconnaissance de la Qualité de Travailleur Handicapé</p>
            <p>Nationnalité Française</p>
            <p>Célibataire</p>
            <p>Permis de conduire - Véhicule Personnel</p>
          </div>
        </div>
        <img src={photo} alt="" className="photo" />
      </div>
      {component && component === "presentation"
        //render conditionnelle, si le composant === presentation / afficher le composant
        ?
        <>
          <div data-slider>
            <Presentation />
          </div>
          <div className="direction">
            {/* Modifier la valeur du hook sur l'event onclick pour changer de composant */}
            <button style={{ cursor: 'pointer' }} onClick={() => setComponent("loisirs")}> Centre d'interêt & Contact </button>
            <button style={{ cursor: 'pointer' }} onClick={() => { setComponent("formation") }}> Formation </button>
          </div>
        </>
        : (component && component === "formation"
          ?
          <>
            <div data-slider>
              <Formation />
            </div>
            <div className="direction">
              <button style={{ cursor: 'pointer' }} onClick={() => setComponent("presentation")}> Présentation </button>
              <button style={{ cursor: 'pointer' }} onClick={() => setComponent("experience")}> Expérience </button>
            </div>
          </>
          : (component && component === "experience"
            ?
            <>
              <div data-slider>
                <Experience />
              </div>
              <div className="direction">
                <button style={{ cursor: 'pointer' }} onClick={() => { setComponent("formation") }}> Formation </button>
                <button style={{ cursor: 'pointer' }} onClick={() => setComponent("langage")}> Compétence </button>
              </div>
            </>
            : (component && component === "langage"
              ?
              <>
                <div data-slider>
                  <Langage />
                </div>
                <div className="direction">
                  <button style={{ cursor: 'pointer' }} onClick={() => setComponent("experience")}> Expérience </button>
                  <button style={{ cursor: 'pointer' }} onClick={() => setComponent("loisirs")}> Centre d'interêt & Contact </button>
                </div>
              </>
              : (component && component === "loisirs"
                ?
                <>
                  <div data-slider>
                    <Loisirs />
                  </div>
                  <div className="direction">
                    <button style={{ cursor: 'pointer' }} onClick={() => setComponent("langage")}> Compétence </button>
                    <button style={{ cursor: 'pointer' }} onClick={() => setComponent("presentation")}> Présentation </button>
                  </div>
                </>
                : <div data-slider>
                  <Presentation />
                </div>
              )
            )
          )
        )
      }
    </div>
  );
}

export default App;
