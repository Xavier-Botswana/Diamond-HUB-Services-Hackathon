import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import AuthLayout from "../layouts/auth-layout";
import AppLayout from "../layouts/app-layout";
import { Home } from "./home";

export default function Views() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/auth/login" />
      </Route>
      <Route path="/auth/login">
        <AuthLayout />
      </Route>
      <Route path="/app">
        <AppLayout />
      </Route>

      <Route path="/home">
        <Home/>
      </Route>
    </Switch>
  );
}
