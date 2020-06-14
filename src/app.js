import React from 'react';
import {Switch, Route} from 'react-router'
import Home from "./pages/home";
import About from "./pages/about";

const App = () => (
    <Switch>
        <Route exact path="/" render={props => (
            <Home {...props} />
        )} />

        <Route path="/about" render={props => (
            <About {...props} />
        )} />
    </Switch>
);

export default App;