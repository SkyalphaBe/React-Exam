import React from "react";
import {NavLink} from "react-router-dom";

type QuizProps = {
    titre: string,
    nbQuestion: String
}
function Qwiz(props : QuizProps) {
    return(
        <div className={"Qwiz"}>
            <h2>{props.titre}</h2>
            <h2>{props.nbQuestion} Questions</h2>
            <div>
                <NavLink to={"/modifQwiz"}>Modifer</NavLink>
                <NavLink to={"/resultat"}>Résulat</NavLink>
            </div>
        </div>
    );
}

export default Qwiz;