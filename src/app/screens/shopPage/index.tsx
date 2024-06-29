import { Route, Switch, useRouteMatch } from "react-router-dom";
import Products from "./Products";
import ChosenProduct from "./ChosenProduct";
import { CardItem } from "../../../libs/types/search";
import "../../../css/products.css";

interface ProductsPageProps {
  onAdd: (item: CardItem) => void;
}

export default function ShopPage(props: ProductsPageProps) {
  const { onAdd } = props;
  const products = useRouteMatch();
  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct onAdd={onAdd} />
        </Route>
        <Route path={`${products.path}`}>
          <Products onAdd={onAdd} />
        </Route>
      </Switch>
    </div>
  );
}
