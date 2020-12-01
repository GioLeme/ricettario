import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "../components/templates/home";
import Favorites from "../components/templates/favorites";
import Categories from "../components/templates/categories";
import BuyList from "../components/templates/buy-list";

export default function Router() {
  return (
    <Switch>
      <Route path="/buy-list">
        <BuyList />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
