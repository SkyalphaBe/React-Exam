import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return(
        <div className={"navigation"}>
            <h1>Kwiz</h1>
            <div className={"navContent"}>
                <NavLink to={"/"}>
                    <div>Jouer</div>
                </NavLink>
                <NavLink to={"/creer"}>
                    <div>Créer</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;