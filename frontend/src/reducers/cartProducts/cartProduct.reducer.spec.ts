import { iCartProduct } from '../../models/card';
import { cartProductReducer } from './cartProduct.reducer';
import * as actions from './cartProduct.action.creators';
import { AnyAction } from '@reduxjs/toolkit';

const mockedArray: Array<iCartProduct> = [
    {
        id: 'test1',
        amount: 0,
    },
    {
        id: 'test2',
        amount: 0,
    },
];
describe('Given characters reducer', () => {
    describe('When calling it with load action with an array of characters', () => {
        test('It should return a new state with that array of characters', () => {
            const newState = cartProductReducer(
                [],
                actions.loadCartProductsAction(mockedArray)
            );
            expect(newState).toEqual(mockedArray);
        });
    });
    describe('When calling it with add action with a character', () => {
        test('It should return a new state with an array with that character', () => {
            const newState = cartProductReducer(
                [],
                actions.addCartProductsAction(mockedArray[0])
            );
            expect(newState).toEqual([mockedArray[0]]);
        });
    });
    describe('When calling it with update action with a character or partial character', () => {
        test('It should return a new state with a updated array of characters', () => {
            const mockedAmount = 2;
            const newState = cartProductReducer(
                mockedArray,
                actions.updateCartProductsAction({
                    ...mockedArray[0],
                    amount: mockedAmount,
                })
            );
            expect(
                newState.find((item) => item.id === 'test1')?.amount
            ).toEqual(mockedAmount);
        });
    });
    describe('When calling it with delete action with a character', () => {
        test('It should return a new state with an array of previous characters without the deleted one', () => {
            const newState = cartProductReducer(
                mockedArray,
                actions.deleteCartProductsAction(mockedArray[0])
            );
            expect(newState).toEqual([mockedArray[1]]);
        });
    });
    describe('When calling it with a non related action', () => {
        test('It should return a new state equal to the previous one', () => {
            const newState = cartProductReducer(mockedArray, {} as AnyAction);
            expect(newState).toEqual(mockedArray);
        });
    });
});
