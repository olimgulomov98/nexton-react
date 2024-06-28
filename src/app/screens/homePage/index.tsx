import React, { useEffect } from "react";
import PopularClothes from "./PopularClothes";
import NewFashion from "./NewFashion";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Article from "./Article";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewFashion, setPopularClothes, setTopUsers } from "./slice";
import { Product } from "../../../libs/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../libs/enums/product.enum";
import MemberService from "../../services/MemberService";
import { Member } from "../../../libs/types/member";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularClothes: (data: Product[]) => dispatch(setPopularClothes(data)),
  setNewFashion: (data: Product[]) => dispatch(setNewFashion(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

export default function HomePage() {
  const { setPopularClothes, setNewFashion, setTopUsers } = actionDispatch(
    useDispatch()
  );

  useEffect(() => {
    // Backend server data fetch => Data
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        // productCollection: ProductCollection.MEN,
      })
      .then((data) => {
        setPopularClothes(data);
      })
      .catch((err) => console.log(err));

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        // productCollection: ProductCollection.MEN,
      })
      .then((data) => {
        setNewFashion(data);
      })
      .catch((err) => console.log(err));

    const member = new MemberService();
    member
      .getTopUsers()
      .then((data) => setTopUsers(data))
      .catch((err) => console.log(err));
  }, []);
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
