import React from "react";
import PopularProducts from "./PopularProducts";
import NewProducts from "./NewProducts";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

export function HomePage() {
  return (
    <div className={"homepage"}>
      <PopularProducts />
      <NewProducts />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
