import React from "react";
import {NavLink} from "react-router-dom";

function Modifier() {
    return(
        <div className={"modifier"}>
            <h1>Modifier un Quiz</h1>
            <div className={"modifierContent"}>

            </div>
            <NavLink to={"/"}>retour</NavLink>
        </div>
    );
}

export default Modifier;