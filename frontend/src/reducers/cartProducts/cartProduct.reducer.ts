import { createReducer } from '@reduxjs/toolkit';
import { iCartProduct } from '../../models/card';
import * as actions from './cartProduct.action.creators';

const initialState = [] as Array<iCartProduct>;
export const cartProductReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(actions.loadCartProductsAction, (state, action) => [
            ...action.payload,
        ])
        .addCase(actions.addCartProductsAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(actions.updateCartProductsAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(actions.deleteCartProductsAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addDefaultCase((state) => state)
);
