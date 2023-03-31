import { CartItem } from "../../interfaces/CartItem";

export enum ActionTypes{
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
    CHANGE_QUANTITY_CART_ITEM = "CHANGE_QUANTITY_CART_ITEM"
}

export function addToCartAction(productItem: CartItem){
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            productItem
        }
    }
}

export function changeQuantityCartItemAction(productId: number, quantity: number){
    return {
        type: ActionTypes.CHANGE_QUANTITY_CART_ITEM,
        payload: {
            productId,
            quantity
        }
    }
}

export function removeCartItemAction(productId: number){
    return {
        type: ActionTypes.REMOVE_CART_ITEM,
        payload: {
            productId
        }
    }
}

