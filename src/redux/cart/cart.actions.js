import {CartTypes} from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = cartItem => ({
    type: CartTypes.ADD_ITEM,
    payload: cartItem
});