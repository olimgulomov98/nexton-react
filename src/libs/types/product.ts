import {
  ProductCollection,
  ProductKidsSize,
  ProductShoeSize,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: string;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productOrgPrice: number;
  productDisPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productShoeSize: ProductShoeSize;
  productKidsSize: ProductKidsSize;
  productDesc?: string;
  productImages: string[];
  productViews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  search?: string;
}
