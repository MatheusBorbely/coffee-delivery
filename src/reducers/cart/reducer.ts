import { CartContextType } from "../../interfaces/Cart";
import { ActionTypes } from "./actions";

function calcTotal(){
    return 0;
}
function calcquantityTotalItens(){
    return 0;
}

export function cartReducer(state: CartContextType, action: any){
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload.productItem],
                quantityTotalItems: calcquantityTotalItens(),
                total: calcTotal()
            }
        case ActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.productId),
                quantityTotalItems: calcquantityTotalItens(),
                total: calcTotal()
            }
        case ActionTypes.CHANGE_QUANTITY_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if(item.id === action.payload.productId) item.quantity = action.payload.quantity;
                    return item;
                }),
                quantityTotalItems: calcquantityTotalItens(),
                total: calcTotal()
            }
        default:
            return state;
    } 
}