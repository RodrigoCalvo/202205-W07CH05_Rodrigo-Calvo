import { ValidateId } from './ValidateId';
import { render, screen } from '../utils/test-utils';
import { iStore } from '../store/store';
import { BrowserRouter, useParams } from 'react-router-dom';
import { robotReducer } from '../reducers/robots/robot.reducer';
import { iRobot } from '../models/robot';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

const reducer = {
    robots: robotReducer,
};
const mockedArray: Array<iRobot> = [
    {
        _id: '1',
        name: 'test1',
        image: '',
        speed: 0,
        life: 0,
        born: '',
    },
    {
        _id: '2',
        name: 'test2',
        image: '',
        speed: 0,
        life: 0,
        born: '',
    },
    {
        _id: '3',
        name: 'test3',
        image: '',
        speed: 0,
        life: 0,
        born: '',
    },
];
const preloadedState: iStore = {
    robots: mockedArray as Array<iRobot>,
};

describe('Given the ValidateId component', () => {
    describe('When calling it and the url param is valid', () => {
        beforeEach(() => {
            (useParams as jest.Mock).mockImplementation(() => ({
                id: '1',
            }));
        });
        test('It should render the Details component', () => {
            render(
                <BrowserRouter>
                    <ValidateId />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const testElement = screen.getByText(/test1/i);
            expect(testElement).toBeInTheDocument();
        });
    });
    describe('When calling it and the url param is invalid', () => {
        beforeEach(() => {
            (useParams as jest.Mock).mockImplementation(() => 'test1');
        });
        test('It should render the NotFound component', () => {
            const preloadedState: iStore = {
                robots: [] as Array<iRobot>,
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
