import {CartTypes} from "./cart.types";

const INITIAL_STATE = {
    hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    if (action.type === CartTypes.TOGGLE_CART_HIDDEN) {
        return {
            ...state,
            hidden: !state.hidden
        };
    } else {
        return state;
    }
};
export default cartReducer;