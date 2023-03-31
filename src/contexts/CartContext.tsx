import { ReactNode, createContext, useReducer} from "react"

import { addToCartAction, 
         changeQuantityCartItemAction, 
         removeCartItemAction 
    } from "../reducers/cart/actions";
import { cartReducer } from "../reducers/cart/reducer";
import { CartItem } from "../interfaces/CartItem";
import { CartContextType } from "../interfaces/Cart";

interface CartContextProviderProps {
    children: ReactNode;
};

const cartEmpty: CartContextType = {
    cartItems: [],
    quantityTotalItems: 0,
    total: 0,
    addToCart: () => {},
    changeQuantityCartItem: () => {},
    removeCartItem: () => {}
};

export const CartContext  = createContext<CartContextType>(cartEmpty);

export function CartContextProvider({children}: CartContextProviderProps){
    const [cart, dispatch] = useReducer(cartReducer,cartEmpty) ;

    function addToCart(productItem: CartItem){
        dispatch(addToCartAction(productItem));
    };

    function changeQuantityCartItem(productId: number, quantity: number){
        dispatch(changeQuantityCartItemAction(productId,quantity));
    };

    function removeCartItem(productId: number){
        dispatch(removeCartItemAction(productId));
    };

    return (
        <CartContext.Provider value={{...cart, addToCart, changeQuantityCartItem, removeCartItem}}>
            { children }
        </CartContext.Provider>
    )
}