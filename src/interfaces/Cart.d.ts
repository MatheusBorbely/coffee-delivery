import { CartItem } from "./interfaces/Product";

export interface CartContextType {
    cartItems: CartItem[],
    quantityTotalItems: number,
    total: number;
}