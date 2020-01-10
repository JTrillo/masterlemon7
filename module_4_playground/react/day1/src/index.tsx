import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginScene, HotelCollectionScene } from "./scenes";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact={true} path="/" component={LoginScene} />
            <Route path="/hotel-collection" component={HotelCollectionScene} />
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);