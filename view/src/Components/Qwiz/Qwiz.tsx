import React from "react";
import {NavLink} from "react-router-dom";

type QuizProps = {
    titre: string,
    nbQuestion: String
}
function Qwiz(props : QuizProps) {
    return(
        <div className={"d-flex justify-content-sm-around w-100 bg-primary rounded col text-white"}>
            <h2>{props.titre}</h2>
            <h2>{props.nbQuestion} Questions</h2>
            <div className={"d-flex flex-column"}>
                <NavLink to={"/modifQwiz"} className={"text-white-50"}>Modifer</NavLink>
                <NavLink to={"/resultat"} className={"text-white-50"}>Résulat</NavLink>
            </div>
        </div>
    );
}

export default Qwiz;