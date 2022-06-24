import { BrowserRouter } from 'react-router-dom';
import { iCartProduct, iProduct } from '../models/card';
import { render, screen } from '../utils/test-utils';
import { CartItem } from './CartItem';
import { cartProductReducer } from '../reducers/cartProducts/cartProduct.reducer';
import { productReducer } from '../reducers/products/product.reducer';
import { iStore } from '../store/store';

const reducer = {
    cartProducts: cartProductReducer,
    products: productReducer,
};
const preloadedState: iStore = {
    cartProducts: [] as Array<iCartProduct>,
    products: [] as Array<iProduct>,
};
const mockProduct1: iCartProduct = {
    id: 'test1',
    amount: 0,
};
const mockProduct2: iCartProduct = {
    id: 'test2',
    amount: 0,
};

describe('Given the CartItem component', () => {
    describe('When calling it with a cart product object', () => {
        test('Then it should render with the object data', () => {
            render(
                <BrowserRouter>
                    <CartItem product={mockProduct1} />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getByText(/test1/i);
            expect(element).toBeInTheDocument();
        });
    });
});
