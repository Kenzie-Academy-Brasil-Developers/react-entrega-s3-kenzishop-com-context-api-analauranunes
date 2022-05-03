import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { CartPage } from "../Pages/Cart";
import { Home } from "../Pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <CartPage />
      </Route>
    </Switch>
  );
};
