import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Applications from "./applications";
import Payments from "./payments";
import CompanyKYC from "./kyc";
import Licenses from "./licenses";
import SortableTable from "./Dash";
import Logs from "./logs";
export default function AppViews() {
  return (
    <Switch>
      <Route exact path="/app">
        <Redirect to="/app/dashboard" />
      </Route>

      <Route exact path="/app/dashboard" component={SortableTable} />

      <Route exact path="/app/applications" component={Applications} />

      <Route exact path="/app/payments" component={Payments} />

      <Route exact path="/app/companyKYC" component={CompanyKYC} />

      <Route exact path="/app/logs" component={Logs} />

      <Route exact path="/app/licenses" component={Licenses} />
    </Switch>
  );
}
