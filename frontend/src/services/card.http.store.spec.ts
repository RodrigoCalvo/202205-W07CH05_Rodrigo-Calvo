import { iCard } from '../models/card';
import { CardHttpStore } from './card.http.store';

const card1: iCard = { suit: 'Bastos', number: 0 };
const card2: iCard = { suit: 'Espadas', number: 0 };

describe('Given CartProductHttpStore service', () => {
    describe('When called getAllProducts', () => {
        test('Then it should return a products array', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([card1, card2]),
            });
            const api = new CardHttpStore();
            const response = await api.getAllProducts();
            expect(response).toEqual([card1, card2]);
        });
    });
});
