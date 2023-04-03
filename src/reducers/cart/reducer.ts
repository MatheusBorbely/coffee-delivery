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
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            const newItem = action.payload.productItem;
            const updatedCartItemsOnAdd = [...state.cartItems, newItem];
            return {
                ...state,
                cartItems: updatedCartItemsOnAdd,
                quantityTotalItems: sumCartItems(updatedCartItemsOnAdd),
                total: getPriceTotal(updatedCartItemsOnAdd)
            }
        case ActionTypes.REMOVE_CART_ITEM:
            const updatedCartItemsOnRemove = state.cartItems.filter((item) => item.id !== action.payload.productId);
            return {
                ...state,
                cartItems: updatedCartItemsOnRemove,
                quantityTotalItems: sumCartItems(updatedCartItemsOnRemove),
                total: getPriceTotal(updatedCartItemsOnRemove)
            }
        case ActionTypes.CHANGE_QUANTITY_CART_ITEM:
            const { productId, quantity } = action.payload;
            const updatedCartItemsOnChange = state.cartItems.map((item) => {
              if (item.id === productId) {
                return { ...item, quantity };
              }
              return item;
            });
          
            return {
              ...state,
              cartItems: updatedCartItemsOnChange,
              quantityTotalItems: sumCartItems(updatedCartItemsOnChange),
              total: getPriceTotal(updatedCartItemsOnChange),
            };
        default:
            return state;
    } 
}