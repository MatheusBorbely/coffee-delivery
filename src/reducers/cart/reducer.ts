import { ActionTypes } from "./actions";
import { CartContextType } from "../../interfaces/Cart";
import { CartItem } from "../../interfaces/CartItem";


function sumCartItems(cartItems: CartItem[]){
    return cartItems.reduce((accumulator: number, currentValue: CartItem) => currentValue.quantity + accumulator, 0);
}

function getPriceTotal(cartItems: CartItem[]){
    return cartItems.reduce((accumulator: number, currentValue: CartItem) => (currentValue.price * currentValue.quantity) + accumulator, 0);
}

export function cartReducer(state: CartContextType, action: any){
    const newItem = action.payload.productItem;
    const updatedCartItems = [...state.cartItems, newItem];
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload.productItem],
                quantityTotalItems: sumCartItems(updatedCartItems),
                total: getPriceTotal(updatedCartItems)
            }
        case ActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.productId),
                quantityTotalItems: sumCartItems(updatedCartItems),
                total: getPriceTotal(updatedCartItems)
            }
        case ActionTypes.CHANGE_QUANTITY_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if(item.id === action.payload.productId) return { ...item, quantity: action.payload.quantity};
                    return item;
                }),
                quantityTotalItems: sumCartItems(updatedCartItems),
                total: getPriceTotal(updatedCartItems)
            }
        default:
            return state;
    } 
}