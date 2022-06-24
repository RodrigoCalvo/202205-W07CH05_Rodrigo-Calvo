import { iCard } from '../models/card';

export class CardHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3500/cards/';
    }

    getAllProducts(): Promise<Array<iCard>> {
        return fetch(this.apiUrl).then((resp) => resp.json());
    }
}
