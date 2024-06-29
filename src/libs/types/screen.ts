import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
  productsPage: ProductsPageState;
  homePage: HomePageState;
  ordersPage: OrdersPageState;
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
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
