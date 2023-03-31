import { ActionTypes } from "./actions";
import { CartContextType } from "../../interfaces/Cart";


function sumCartItems(){
    return 0;
}

function getPriceTotal(){
    return 0;
}

export function cartReducer(state: CartContextType, action: any){
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload.productItem],
                quantityTotalItems: sumCartItems(),
                total: getPriceTotal()
            }
        case ActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.productId),
                quantityTotalItems: sumCartItems(),
                total: getPriceTotal()
            }
        case ActionTypes.CHANGE_QUANTITY_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if(item.id === action.payload.productId) return { ...item, quantity: action.payload.quantity};
                    return item;
                }),
                quantityTotalItems: sumCartItems(),
                total: getPriceTotal()
            }
        default:
            return state;
    } 
}