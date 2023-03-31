import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return(
        <div className={"p-3 bg-primary w-25"}>
            <h1>Kwiz</h1>
            <div className={"d-flex flex-column"}>
                <NavLink to={"/"} className={"btn btn-secondary m-2"}>
                    <div>Jouer</div>
                </NavLink>
                <NavLink to={"/creer"} className={"btn btn-secondary m-2"}>
                    <div>Créer</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;