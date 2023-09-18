import React from "react";
import Login from "./login";
import { Switch, Route ,Redirect} from "react-router-dom";
import Register from "./register";

export default function AppViews() {
  return (
    <Switch>
      {/* <Route exact path="/">
        <Redirect to="/auth/login"/>
       </Route>  */}
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/registration" component={Register} />
    </Switch>
  );
}
