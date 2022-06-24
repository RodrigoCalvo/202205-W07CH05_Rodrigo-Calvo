import { iProduct } from '../../models/card';
import { productReducer } from './product.reducer';
import * as actions from './product.action.creators';
import { AnyAction } from '@reduxjs/toolkit';

const mockedArray: Array<iProduct> = [
    {
        id: '1',
        card: { number: 0, suit: 'Bastos' },
        price: 0,
        stock: 0,
        description: '',
        promotion: false,
    },
    {
        id: '2',
        card: { number: 0, suit: 'Bastos' },
        price: 0,
        stock: 0,
        description: '',
        promotion: false,
    },
];
describe('Given characters reducer', () => {
    describe('When calling it with load action with an array of characters', () => {
        test('It should return a new state with that array of characters', () => {
            const newState = productReducer(
                [],
                actions.loadProductsAction(mockedArray)
            );
            expect(newState).toEqual(mockedArray);
        });
    });
    describe('When calling it with add action with a character', () => {
        test('It should return a new state with an array with that character', () => {
            const newState = productReducer(
                [],
                actions.addProductsAction(mockedArray[0])
            );
            expect(newState).toEqual([mockedArray[0]]);
        });
    });
    describe('When calling it with update action with a character or partial character', () => {
        test('It should return a new state with a updated array of characters', () => {
            const newState = productReducer(
                mockedArray,
                actions.updateProductsAction({
                    ...mockedArray[0],
                    promotion: true,
                })
            );
            expect(newState.find((item) => item.id === '1')?.promotion).toBe(
                true
            );
        });
    });
    describe('When calling it with delete action with a character', () => {
        test('It should return a new state with an array of previous characters without the deleted one', () => {
            const newState = productReducer(
                mockedArray,
                actions.deleteProductsAction(mockedArray[0])
            );
            expect(newState).toEqual([mockedArray[1]]);
        });
    });
    describe('When calling it with a non related action', () => {
        test('It should return a new state equal to the previous one', () => {
            const newState = productReducer(mockedArray, {} as AnyAction);
            expect(newState).toEqual(mockedArray);
        });
    });
});

