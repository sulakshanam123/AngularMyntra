import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";


export const selectCart = (state: AppState) => { return state.cart};

export const selectCartCount = createSelector(selectCart, (state) => {
    return state.cart.length;
})