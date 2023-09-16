import { createReducer, on } from "@ngrx/store";
import { AppState } from "./app.state";
import { addToCart, removeFromCart } from "./cart.action";

const intialState: AppState = {
    cart: [],
    men: [],
    women: []
};

export const cartReducer = createReducer(
    intialState,
    on(addToCart, (state: any, {item}) => { 
        console.log('recieved props in reducer: \n', 'props.type ' + item.type, ' props.msg ' + item)
        return {...state, cart: [...state.cart, item]};
    }),
    on(removeFromCart, (state: any, msg) => { 
        console.log('recieved props in reducer: \n', 'props.type ' + msg.type, ' props.msg ' + msg);
        let finalCart = [...state.cart];
        finalCart.pop();
        return {...state, cart: [...finalCart]};
    }),
)