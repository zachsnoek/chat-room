import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Landing } from "./Landing";
import { ChatRoom } from "./ChatRoom";
import "./styles.css";

const AuthenticatedApp = () => {
    return <Router />;
};

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/room/:roomId" component={ChatRoom} />
            </Switch>
        </BrowserRouter>
    );
};

export { AuthenticatedApp };
