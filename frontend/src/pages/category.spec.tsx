import { iCartProduct, iProduct } from '../models/card';
import { Category } from './category';
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

describe('Given the Category component', () => {
    describe('When calling it with a specific suit argument', () => {
        test('It should render the redux store data with that suit', () => {
            render(
                <BrowserRouter>
                    <Category suit="Espadas" />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const testElement2 = screen.getByText(/cate/i);
            expect(testElement2).toBeInTheDocument();
            const testElement3 = screen.queryByText(/test1/i);
            expect(testElement3).not.toBeInTheDocument();
            const testElement4 = screen.getByText(/test2/i);
            expect(testElement4).toBeInTheDocument();
        });
    });
});
