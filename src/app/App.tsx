import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ShopPage } from './screens/shopPage';
import { OrdersPage } from './screens/ordersPage';
import { HelpPage } from './screens/helpPage';
import { UserPage } from './screens/userPage';
import { HomePage } from './screens/homePage';
import '../css/app.css';

function App() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/shop">ShopPage</Link>
        </li>
        <li>
          <Link to="/orders">OrdersPage</Link>
        </li>
        <li>
          <Link to="/help">HelpPage</Link>
        </li>
        <li>
          <Link to="/member-page">UserPage</Link>
        </li>
      </ul>
    </nav>

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/shop">
        <ShopPage />
      </Route>
      <Route path="/orders">
        <OrdersPage />
      </Route>
      <Route path="/help">
        <HelpPage />
      </Route>
      <Route path="/member-page">
        <UserPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
