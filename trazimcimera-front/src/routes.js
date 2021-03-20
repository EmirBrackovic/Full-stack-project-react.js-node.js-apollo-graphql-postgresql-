import React from "react";
import { Switch, Route } from "react-router-dom";
import Oglasi from "./views/Oglasi/Oglasi";
import Index from "./views/Index/Index";
import Kontakt from "./views/Kontakt/Kontakt";
import Prijava from "./views/Prijava/Prijava";
import Registracija from "./views/Registracija/Registracija";
import DodajOglas from "./views/DodajOglas/DodajOglas";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/oglasi" component={Oglasi}/>
            <Route exact path="/kontakt" component={Kontakt}/>
            <Route exact path="/prijava" component={Prijava}/>
            <Route exact path="/registracija" component={Registracija}/>
            <Route exact path="/dodaj_oglas" component={DodajOglas}/>
        </Switch>
    )
};

export default Routes;
