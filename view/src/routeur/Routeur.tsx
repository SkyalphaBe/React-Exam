import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "../Components/Routeur/Navbar";
import Jouer from "../pages/jouer/Jouer";
import Creer from "../pages/creer/Creer";
import Modifier from "../pages/modifier/Modifier";

function Routeur() {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path={"/"} element={<Jouer/>}/>
                <Route path={"/creer"} element={<Creer/>}/>
                <Route path={"/modifQwiz"} element={<Modifier/>}/>
                <Route path={"/resultat"} element={<Modifier/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default Routeur;