import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ShopPage } from './screens/shopPage';
import { OrdersPage } from './screens/ordersPage';
import { HelpPage } from './screens/helpPage';
import { UserPage } from './screens/userPage';
import { HomePage } from './screens/homePage';
import { HomeNavbar } from './components/headers/HomeNavbar';
import { OtherNavbar } from './components/headers/OtherNavbar';
import Footer from './components/footer';
import '../css/app.css';
import '../css/footer.css'

function App() {
  const location = useLocation()
  
  return (
   <>
    {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
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
    <Footer />
  </>
  );
}

export default App;
