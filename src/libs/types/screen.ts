import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
}

/** HOME PAGE **/
export interface HomePageState {
  popularClothes: Product[];
  newFashion: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE **/

/** ORDERS PAGE **/
