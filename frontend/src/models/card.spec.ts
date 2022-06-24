import { CartProduct } from './card';

describe('Given the class CartProduct', () => {
    describe('When we instantiate an object', () => {
        test(`Then the created object should 
        have the product and count properties:`, () => {
            const obj = new CartProduct('', 0);
            expect(obj).toBeInstanceOf(CartProduct);
            expect(obj).toHaveProperty('id');
            expect(obj).toHaveProperty('amount');
        });
    });
});
