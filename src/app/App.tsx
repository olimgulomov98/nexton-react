import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import ShopPage from "./screens/shopPage";
import OrdersPage from "./screens/ordersPage";
import ContactPage from "./screens/contactPage";
import UserPage from "./screens/userPage";
import HomePage from "./screens/homePage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";

function App() {
  const location = useLocation();

  /** HANDLERS **/

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
        <Route path="/contact">
          <ContactPage />
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
