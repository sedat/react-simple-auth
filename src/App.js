import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Login from "./Login";
import Register from "./Register";
import Success from "./Success";

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/success" exact component={Success} />
                </Switch>
            </Router>
        );
    }
}

export default App;
