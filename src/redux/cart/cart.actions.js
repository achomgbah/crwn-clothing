import {CartTypes} from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = cartItem => ({
    type: CartTypes.ADD_ITEM,
    payload: cartItem
});

export const clearItemFromCart = item => ({
    type: CartTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const removeItem = item => ({
    type: CartTypes.REMOVE_ITEM,
    payload: item
});