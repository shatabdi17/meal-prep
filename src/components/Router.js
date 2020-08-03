import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Meal from "./Meal";
import MealList from "./MealList";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/category/:strCategory" component={MealList} />
      <Route path="/meal/:idMeal" component={Meal} />
    </Switch>
  </BrowserRouter>
);

export default Router;
