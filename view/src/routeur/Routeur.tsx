import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "../Components/Routeur/Navbar";
import Jouer from "../pages/jouer/Jouer";
import Creer from "../pages/creer/Creer";

function Routeur() {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path={"/"} element={<Jouer/>}/>
                <Route path={"/creer"} element={<Creer/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default Routeur;