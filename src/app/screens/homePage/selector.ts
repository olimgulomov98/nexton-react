import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularClothes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularClothes
);

export const retrieveNewFashion = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newFashion
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);
