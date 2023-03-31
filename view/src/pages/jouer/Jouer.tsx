import React from "react";

function Jouer() {
    return(
        <div className={"jouer"}>
            <h1>Choix du Quiz</h1>
            <div className={"jouerContent"}>

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