import { CartItem } from "./interfaces/Product";
export interface CartContextType {
    cartItems: CartItem[],
    quantityTotalItems: number,
    total: number,

    addToCart: (productItem: CartItem) => void,
    changeQuantityCartItem: (productId: number, quantity: number) => void,
    removeCartItem: (productId: number) => void;  
}