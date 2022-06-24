import { iCartProduct, iProduct } from '../models/card';
import { ValidateId } from './ValidateId';
import { render, screen } from '../utils/test-utils';
import { iStore } from '../store/store';
import { BrowserRouter, useParams } from 'react-router-dom';
import { cartProductReducer } from '../reducers/cartProducts/cartProduct.reducer';
import { productReducer } from '../reducers/products/product.reducer';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
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
    {
        id: 'ID-Oros-1',
        card: { number: 1, suit: 'Oros' },
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

describe('Given the ValidateId component', () => {
    describe('When calling it and the url param is valid', () => {
        beforeEach(() => {
            (useParams as jest.Mock).mockImplementation(() => ({
                id: 'ID-Oros-1',
            }));
        });
        test('It should render the Details component', () => {
            render(
                <BrowserRouter>
                    <ValidateId />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const testElement = screen.getByText(/id-oros/i);
            expect(testElement).toBeInTheDocument();
        });
    });
    describe('When calling it and the url param is invalid', () => {
        beforeEach(() => {
            (useParams as jest.Mock).mockImplementation(() => 'test1');
        });
        test('It should render the NotFound component', () => {
            const preloadedState: iStore = {
                cartProducts: [] as Array<iCartProduct>,
                products: [] as Array<iProduct>,
            };
            render(
                <BrowserRouter>
                    <ValidateId />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const testElement = screen.getByText(/404/i);
            expect(testElement).toBeInTheDocument();
        });
    });
});
