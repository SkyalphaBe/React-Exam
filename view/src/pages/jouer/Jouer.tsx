import React from "react";
import Qwiz from "../creer/Qwiz/Qwiz";


function Jouer() {
    return(
        <div className={"jouer"}>
            <h1>Choix du Quiz</h1>
            <div className={"jouerContent"}>
               <Qwiz titre={"Quiz 1"} nbQuestion={"5"}/>
            </div>
            <div>
                <div>
                    <label htmlFor="">Nom</label>
                    <input type="text"/>
                </div>
                <button>Jouer!</button>
            </div>
        </div>
    );
}

export default Jouer;