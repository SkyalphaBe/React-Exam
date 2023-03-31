import React from "react";
import Qwiz from "../../Components/Qwiz/Qwiz";


function Jouer() {
    return(
        <div className={"d-flex justify-content-center align-items-center flex-column w-100 text-white"}>
            <h1 className={"bg-primary rounded p-1 text-bg-"}>Choix du Quiz</h1>
            <div className={"jouerContent w-75"}>
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