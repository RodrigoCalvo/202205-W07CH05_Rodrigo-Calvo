import { BrowserRouter } from 'react-router-dom';
import { iCartProduct, iProduct } from '../models/card';
import { cartProductReducer } from '../reducers/cartProducts/cartProduct.reducer';
import { productReducer } from '../reducers/products/product.reducer';
import { iStore } from '../store/store';
import { render, screen } from '../utils/test-utils';
import { Card } from './Card';

const reducer = {
    cartProducts: cartProductReducer,
    products: productReducer,
};
const preloadedState: iStore = {
    cartProducts: [] as Array<iCartProduct>,
    products: [] as Array<iProduct>,
};
const mockProduct1: iProduct = {
    id: 'test 1',
    card: { number: 0, suit: 'Oros' },
    price: 0,
    stock: 0,
    description: '',
    promotion: false,
};
const mockProduct2: iProduct = {
    id: 'test 2',
    card: { number: 0, suit: 'Oros' },
    price: 0,
    stock: 0,
    description: '',
    promotion: true,
};

describe('Given the Card component', () => {
    describe('When calling it with a product object', () => {
        test('Then it should render with the object data', () => {
            render(
                <BrowserRouter>
                    <Card product={mockProduct1} />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getByText(/test 1/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('When clicking on add button on a item not in the cart', () => {});
});
