import { ReactNode, createContext, useReducer} from "react"
import { CartContextType } from "../interfaces/Cart";
import { CartItem } from "../interfaces/CartItem";
import { cartReducer } from "../reducers/cart/reducer";
import { ActionTypes, addItemAction, changeQuantityItemAction, removeItemAction } from "../reducers/cart/actions";

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContext  = createContext({} as CartContextType);

export function CartContextProvider({children}: CartContextProviderProps){
   
    const [cart, dispatch] = useReducer(cartReducer, {
        cartItems: [],
        quantityTotalItems: 0,
        total: 0
    } as CartContextType)

    function addToCart(productItem: CartItem){
        dispatch(addItemAction(productItem))
    }

    function removeCartItem(productId: number){
        dispatch(removeItemAction(productId))
    }

    function changeQuantityCartItem(productId: number, quantity: number){
        dispatch(changeQuantityItemAction(productId,quantity))
    }

    return (
        <CartContext.Provider value={cart}>
            { children }
        </CartContext.Provider>
    )
}