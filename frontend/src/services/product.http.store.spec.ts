import { Product } from '../models/card';
import { ProductHttpStore } from './product.http.store';

const prod1 = new Product({ number: 0, suit: 'Oros' }, 0, 0, '', false);
const prod2 = new Product({ number: 0, suit: 'Copas' }, 0, 0, '', false);
const prod3 = new Product({ number: 0, suit: 'Bastos' }, 0, 0, '', false);

describe('Given CartProductHttpStore service', () => {
    describe('When called getProduct', () => {
        test('Then it should return a product from the cart db', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(prod1),
            });
            const api = new ProductHttpStore();
            const response = await api.getProduct('');
            expect(response).toEqual(prod1);
        });
    });
    describe('When called getAllProducts', () => {
        test('Then it should return a products array', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([prod1, prod3]),
            });
            const api = new ProductHttpStore();
            const response = await api.getAllProducts();
            expect(response).toEqual([prod1, prod3]);
        });
    });
    describe('When called setProduct with a product to add', () => {
        test('Then it should return the added product', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(prod2),
            });
            const api = new ProductHttpStore();
            const response = await api.setProduct(prod2);
            expect(response).toEqual(prod2);
        });
    });
    describe('When called updateProduct with a modified existent product', () => {
        test('Then it should return the updated product', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest
                    .fn()
                    .mockResolvedValue({ ...prod1, promotion: true }),
            });
            const api = new ProductHttpStore();
            const response = await api.updateProduct({
                ...prod1,
                promotion: true,
            });
            const expectedResponse = { ...prod1, promotion: true };
            expect(response).toEqual(expectedResponse);
        });
    });
    describe('When called deleteProduct with a product', () => {
        test('Then it should return status 200', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(prod3),
            });
            const api = new ProductHttpStore();
            const response = await api.deleteProduct(prod3);
            expect(response).toEqual(prod3);
        });
    });
});

