import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function App() {
    return (
        <Router>
            <Header />

            <main>
                <Switch>
                    <Route exact path="/" children={<Home />} />
                    <Route path="/login" children={<Login />} />
                    <Route path="/register" children={<Register />} />
                </Switch>
            </main>
        </Router>
    );
}
