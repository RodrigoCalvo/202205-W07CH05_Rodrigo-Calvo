import { render, screen } from '../utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { iCartProduct, iProduct } from '../models/card';
import { cartProductReducer } from '../reducers/cartProducts/cartProduct.reducer';
import { productReducer } from '../reducers/products/product.reducer';
import { CartList } from './CartList';
import { iStore } from '../store/store';

const reducer = {
    cartProducts: cartProductReducer,
    products: productReducer,
};
const preloadedState: iStore = {
    cartProducts: [] as Array<iCartProduct>,
    products: [] as Array<iProduct>,
};
const mockProduct: iCartProduct = {
    id: 'test1',
    amount: 0,
};

describe('Given the CartList component', () => {
    describe('When calling it with a products array', () => {
        test('Then it should render a product card for each array element', () => {
            render(
                <BrowserRouter>
                    <CartList products={[mockProduct]} />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getAllByRole('listitem');
            expect(element).toHaveLength([mockProduct].length);
            const element2 = screen.getByText(/test1/i);
            expect(element2).toBeInTheDocument();
        });
    });
});
