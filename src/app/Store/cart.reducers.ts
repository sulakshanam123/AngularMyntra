import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "./cart.action";

const intialState = 0;

export const cartReducer = createReducer(
    intialState,
    on(addToCart, state => state + 1),
    on(removeFromCart, state => state - 1)
)