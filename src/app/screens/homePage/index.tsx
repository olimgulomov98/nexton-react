import React from "react";
import PopularClothes from "./PopularClothes";
import NewFashion from "./NewFashion";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Article from "./Article";
import "../../../css/home.css";

export function HomePage() {
  return (
    <div className={"homepage"}>
      <PopularClothes />
      <NewFashion />
      <Advertisement />
      <ActiveUsers />
      <Article />
    </div>
  );
}
