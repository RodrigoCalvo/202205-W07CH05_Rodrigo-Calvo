import { BrowserRouter } from 'react-router-dom';
import { iRobot } from '../models/robot';
import { robotReducer } from '../reducers/robots/robot.reducer';
import { iStore } from '../store/store';
import { render, screen } from '../utils/test-utils';
import { RobotCard } from './Card';

const reducer = {
    robots: robotReducer,
};
const preloadedState: iStore = {
    robots: [] as Array<iRobot>,
};
const mockItem1: iRobot = {
    _id: '',
    name: 'test1',
    image: '',
    speed: 0,
    life: 0,
    born: '',
};
const mockItem2: iRobot = {
    _id: '',
    name: 'test2',
    image: '',
    speed: 0,
    life: 0,
    born: '',
};

describe('Given the Card component', () => {
    describe('When calling it with a product object', () => {
        test('Then it should render with the object data', () => {
            render(
                <BrowserRouter>
                    <RobotCard robot={mockItem1} />
                </BrowserRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getByText(/test 1/i);
            expect(element).toBeInTheDocument();
        });
    });
    describe('When clicking on add button on a item not in the cart', () => {});
});
