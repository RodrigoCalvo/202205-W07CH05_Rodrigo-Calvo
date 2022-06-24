import { render, screen } from '../utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { iCartProduct, iProduct } from '../models/card';
import { cartProductReducer } from '../reducers/cartProducts/cartProduct.reducer';
import { productReducer } from '../reducers/products/product.reducer';
import { List } from './List';
import { iStore } from '../store/store';

const reducer = {
    cartProducts: cartProductReducer,
    products: productReducer,
};
const preloadedState: iStore = {
    cartProducts: [] as Array<iCartProduct>,
    products: [] as Array<iProduct>,
};
const mockProduct: iProduct = {
    id: 'test 1',
    card: { number: 0, suit: 'Oros' },
    price: 0,
    stock: 0,
    description: '',
    promotion: false,
};

describe('Given the List component', () => {
    describe('When calling it with a products array', () => {
        test('Then it should render a product card for each array element', () => {
            render(
                <BrowserRouter>
                    <List products={[mockProduct]} />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getAllByRole('listitem');
            expect(element).toHaveLength([mockProduct].length);
            const element2 = screen.getByText(/test 1/i);
            expect(element2).toBeInTheDocument();
        });
    });
});
