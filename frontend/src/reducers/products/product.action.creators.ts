import { createAction } from '@reduxjs/toolkit';
import { iProduct } from '../../models/card';
import { actionTypes } from './product.action.types';

export const loadProductsAction = createAction<Array<iProduct>>(
    actionTypes['product@load']
);
export const addProductsAction = createAction<iProduct>(
    actionTypes['product@add']
);
export const updateProductsAction = createAction<iProduct>(
    actionTypes['product@update']
);
export const deleteProductsAction = createAction<iProduct>(
    actionTypes['product@delete']
);
