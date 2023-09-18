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
      <Route path="/auth/login" component={Login} />
      <Route  path="/registration" component={Register} />
    </Switch>
  );
}
