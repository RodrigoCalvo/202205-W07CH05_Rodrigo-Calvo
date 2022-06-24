import { createAction } from '@reduxjs/toolkit';
import { iCartProduct } from '../../models/card';
import { actionTypes } from './cartProduct.action.types';

export const loadCartProductsAction = createAction<Array<iCartProduct>>(
    actionTypes['cartProduct@load']
);
export const addCartProductsAction = createAction<iCartProduct>(
    actionTypes['cartProduct@add']
);
export const updateCartProductsAction = createAction<iCartProduct>(
    actionTypes['cartProduct@update']
);
export const deleteCartProductsAction = createAction<iCartProduct>(
    actionTypes['cartProduct@delete']
);
