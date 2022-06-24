import { iCartProduct, iProduct } from '../models/card';
import { Cart } from './cart';
import { render, screen } from '../utils/test-utils';
import { iStore } from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import { cartProductReducer } from '../reducers/cartProducts/cartProduct.reducer';
import { productReducer } from '../reducers/products/product.reducer';

const reducer = {
    cartProducts: cartProductReducer,
    products: productReducer,
};
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
const preloadedState: iStore = {
    cartProducts: mockedArray as Array<iCartProduct>,
    products: [] as Array<iProduct>,
};

describe('Given the Cart component', () => {
    describe('When calling it', () => {
        test('It should render the redux store data', () => {
            render(
                <BrowserRouter>
                    <Cart />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const testElement1 = screen.getAllByRole('listitem');
            expect(testElement1).toHaveLength(mockedArray.length);
            const testElement2 = screen.getByText(/lista/i);
            expect(testElement2).toBeInTheDocument();
            const testElement3 = screen.getByText(/test1/i);
            expect(testElement3).toBeInTheDocument();
        });
    });
});
