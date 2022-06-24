import { BrowserRouter, useNavigate } from 'react-router-dom';
import { iCartProduct, iProduct } from '../models/card';
import { cartProductReducer } from '../reducers/cartProducts/cartProduct.reducer';
import { productReducer } from '../reducers/products/product.reducer';
import { iStore } from '../store/store';
import { fireEvent, render, screen } from '../utils/test-utils';
import { Details } from './details';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));
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
        description: 'test description',
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
const mockedNavigate = jest.fn();

describe('Given Details component', () => {
    describe('When calling it with a valid existent product id', () => {
        test('It should render the info of the related product', () => {
            render(
                <BrowserRouter>
                    <Details id="test1" />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const testElement = screen.getByText(/test description/i);
            expect(testElement).toBeInTheDocument();
        });
    });
    describe('When calling it with a valid non existent product id', () => {
        test('It should render a warning of no disponible', () => {
            render(
                <BrowserRouter>
                    <Details id="test3" />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const testElement = screen.getByText(/disponible actualmente/i);
            expect(testElement).toBeInTheDocument();
        });
    });
    describe('When clicked the back button', () => {
        beforeEach(() => {
            (useNavigate as jest.Mock).mockImplementation(() => mockedNavigate);
        });
        test('It should call the navigate function with a -1 arg', () => {
            render(
                <BrowserRouter>
                    <Details id="test1" />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(mockedNavigate).toHaveBeenCalledWith(-1);
        });
    });
});
