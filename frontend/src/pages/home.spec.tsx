import { iCartProduct, iProduct } from '../models/card';
import { Home } from './home';
import { render, screen } from '../utils/test-utils';
import { iStore } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import { cartProductReducer } from '../reducers/cartProducts/cartProduct.reducer';
import { productReducer } from '../reducers/products/product.reducer';

const reducer = {
    cartProducts: cartProductReducer,
    products: productReducer,
};
const mockedArray: Array<iProduct> = [
    {
        id: 'test1',
        card: { number: 0, suit: 'Copas' },
        price: 0,
        stock: 0,
        description: '',
        promotion: true,
    },
    {
        id: 'test2',
        card: { number: 0, suit: 'Espadas' },
        price: 0,
        stock: 0,
        description: '',
        promotion: false,
    },
];
const preloadedState: iStore = {
    cartProducts: [] as Array<iCartProduct>,
    products: mockedArray as Array<iProduct>,
};

describe('Given the Home component', () => {
    describe('When calling it', () => {
        test('It should render the redux store data that match the promotion=true', () => {
            render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const testElement = screen.getByText(/test1/i);
            expect(testElement).toBeInTheDocument();
            const testElement2 = screen.getByText(/promo/i);
            expect(testElement2).toBeInTheDocument();
        });
    });
});
