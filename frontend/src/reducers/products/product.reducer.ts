import { createReducer } from '@reduxjs/toolkit';
import { iProduct } from '../../models/card';
import * as actions from './product.action.creators';

const initialState = [] as Array<iProduct>;
export const productReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(actions.loadProductsAction, (state, action) => [
            ...action.payload,
        ])
        .addCase(actions.addProductsAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(actions.updateProductsAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(actions.deleteProductsAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addDefaultCase((state) => state)
);
