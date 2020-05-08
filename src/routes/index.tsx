import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <div>Página Inicial</div>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
