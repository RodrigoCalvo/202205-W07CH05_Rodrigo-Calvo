import { configureStore } from '@reduxjs/toolkit';
import { iCartProduct, iProduct } from '../models/card';
import { cartProductReducer } from '../reducers/cartProducts/cartProduct.reducer';
import { productReducer } from '../reducers/products/product.reducer';

export interface iStore {
    cartProducts: Array<iCartProduct>;
    products: Array<iProduct>;
}

const preloadedState: iStore = {
    cartProducts: [] as Array<iCartProduct>,
    products: [] as Array<iProduct>,
};

export const store = configureStore({
    reducer: { cartProducts: cartProductReducer, products: productReducer },
    preloadedState,
});
