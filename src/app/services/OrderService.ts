import axios from "axios";
import { serverApi } from "../../libs/config";
import { CardItem } from "../../libs/types/search";
import {
  Order,
  OrderInquiry,
  OrderItemInput,
  OrderUpdateInput,
} from "../../libs/types/order";

class OrderService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async createOrder(input: CardItem[]): Promise<Order> {
    try {
      const orderItems: OrderItemInput[] = input.map((cardItem: CardItem) => {
        return {
          itemQuantity: cardItem.quantity,
          itemPrice: cardItem.disPrice,
          productId: cardItem._id,
        };
      });

      const url = `${this.path}/order/create`;
      const result = await axios.post(url, orderItems, {
        withCredentials: true,
      });
      console.log("createOrder:", result);

      return result.data;
    } catch (err) {
      console.log("Error, createOrder:", err);
      throw err;
    }
  }

  public async getMyOrders(input: OrderInquiry): Promise<Order[]> {
    try {
      //   axios.defaults.withCredentials = true;
      const url = `${this.path}/order/all`;
      const query = `?page=${input.page}&limit=${input.limit}&orderStatus=${input.orderStatus}`;

      const result = await axios.get(url + query, { withCredentials: true });
      console.log("getMyOrders:", result);

      return result.data;
    } catch (err) {
      console.log("Error, getMyOrders:", err);
      throw err;
    }
  }

  public async updateOrder(input: OrderUpdateInput): Promise<Order> {
    try {
      const url = `${this.path}/order/update`;
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("updateOrder", result);

      return result.data;
    } catch (err) {
      console.log("Error, updateOrder:", err);
      throw err;
    }
  }
}
export default OrderService;
