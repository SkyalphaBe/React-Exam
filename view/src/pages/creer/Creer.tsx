import React from "react";

function Creer() {
  return (
      <div className={"creer"}>
            <h1>Créer un Quiz</h1>
            <div className={"theme"}>
                <label htmlFor="">Thème</label>
                <input type="text"/>
            </div>
            <div className={"question"}>
                <label htmlFor="">nouvelle question</label>
                <input type="text"/>

                <div className={"reponse"}>
                    <div>
                        <label htmlFor="">1-</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">2-</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">3-</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">4-</label>
                        <input type="text"/>
                    </div>
                </div>

                <div className={"questionQwiz"}>

                </div>
            </div>
      </div>
  );
}

export default Creer;