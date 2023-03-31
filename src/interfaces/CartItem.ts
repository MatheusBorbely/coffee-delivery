import { Product } from "./Product";

export interface CartItem extends Pick<Product, "id" | "image" | "name" | "price">{
    quantity: number;
}