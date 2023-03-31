import React from "react";
import {NavLink} from "react-router-dom";

function Resultat() {
    return(
        <div className={"resultat"}>
            <h1>Résultat</h1>
            <div className={"resultatContent"}>

            </div>
            <NavLink to={"/"}>retour</NavLink>
        </div>
    );
}

export default Resultat;