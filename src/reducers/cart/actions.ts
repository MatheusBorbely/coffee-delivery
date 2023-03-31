import { CartItem } from "../../interfaces/CartItem";

export enum ActionTypes{
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
    CHANGE_QUANTITY_CART_ITEM = "CHANGE_QUANTITY_CART_ITEM"
}

export function addItemAction(productItem: CartItem){
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            productItem
        }
    }
}

export function removeItemAction(productId: number){
    return {
        type: ActionTypes.REMOVE_CART_ITEM,
        payload: {
            productId
        }
    }
}

export function changeQuantityItemAction(productId: number, quantity: number){
    return {
        type: ActionTypes.CHANGE_QUANTITY_CART_ITEM,
        payload: {
            productId,
            quantity
        }
    }
}

