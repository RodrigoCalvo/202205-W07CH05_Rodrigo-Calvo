import { CartProduct } from '../models/card';
import { CartProductHttpStore } from './cartProduct.http.store';

const cprod1 = new CartProduct('test1', 0);
const cprod2 = new CartProduct('test2', 0);
const cprod3 = new CartProduct('test3', 0);

describe('Given CartProductHttpStore service', () => {
    describe('When called getProduct', () => {
        test('Then it should return a product from the cart db', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(cprod1),
            });
            const api = new CartProductHttpStore();
            const response = await api.getProduct('');
            expect(response).toEqual(cprod1);
        });
    });
    describe('When called getAllProducts', () => {
        test('Then it should return a products array', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([cprod1, cprod3]),
            });
            const api = new CartProductHttpStore();
            const response = await api.getAllProducts();
            expect(response).toEqual([cprod1, cprod3]);
        });
    });
    describe('When called setProduct with a product to add', () => {
        test('Then it should return the added product', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(cprod2),
            });
            const api = new CartProductHttpStore();
            const response = await api.setProduct(cprod2);
            expect(response).toEqual(cprod2);
        });
    });
    describe('When called updateProduct with a modified existent product', () => {
        test('Then it should return the updated product', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest
                    .fn()
                    .mockResolvedValue({ ...cprod1, product: 'test4' }),
            });
            const api = new CartProductHttpStore();
            const response = await api.updateProduct({
                ...cprod1,
                id: 'test4',
            });
            const expectedResponse = { ...cprod1, product: 'test4' };
            expect(response).toEqual(expectedResponse);
        });
    });
    describe('When called deleteProduct with a product', () => {
        test('Then it should return status 200', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(cprod3),
            });
            const api = new CartProductHttpStore();
            const response = await api.deleteProduct(cprod3);
            expect(response).toEqual(cprod3);
        });
    });
});
