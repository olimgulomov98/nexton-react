import React from "react";
import PopularProducts from "./PopularProducts";
import NewProducts from "./NewProducts";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Article from "./Article";
import "../../../css/home.css";

export function HomePage() {
  return (
    <div className={"homepage"}>
      <PopularProducts />
      <NewProducts />
      <Advertisement />
      <ActiveUsers />
      <Article />
    </div>
  );
}
