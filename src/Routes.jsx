import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Terms from "./pages/terms_and_conditions.jsx";
import Privacy from "./pages/privacy_policy.jsx";
import Cookie from "./pages/cookie_policy.jsx";
import Aml from "./pages/internal_aml_and_ctf_policy.jsx";
import Founder from "./pages/serge_lobreau.jsx";

const routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/index" component={Home} exact />
    <Route path="/terms" component={Terms} />
    <Route path="/privacy" component={Privacy} />
    <Route path="/cookie" component={Cookie} />
    <Route path="/internal_aml_and_ctf_policy" component={Aml} />
    <Route path="/founder" component={Founder} />
    <Route component={Error} />
  </Switch>
);

export default routes;
