import { Route, Switch, useRouteMatch } from "react-router-dom";
import Products from "./Products";
import "../../../css/products.css";
import ChosenProduct from "./ChosenProduct";

export default function ShopPage() {
  const products = useRouteMatch();
  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct />
        </Route>
        <Route path={`${products.path}`}>
          <Products />
        </Route>
      </Switch>
    </div>
  );
}
