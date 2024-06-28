import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
  productsPage: any;
  homePage: HomePageState;
}

/** HOME PAGE **/
export interface HomePageState {
  popularClothes: Product[];
  newFashion: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE **/
export interface ProductsPageState {
  store: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** ORDERS PAGE **/
