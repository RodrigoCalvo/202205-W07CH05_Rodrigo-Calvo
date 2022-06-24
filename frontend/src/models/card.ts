export type DeckSuit = 'Oros' | 'Copas' | 'Espadas' | 'Bastos';

export interface iCard {
    number: number;
    suit: DeckSuit;
}

export interface iProduct {
    id: string;
    card: iCard;
    price: number;
    stock: number;
    description: string;
    promotion: boolean;
}

export interface iCartProduct {
    id: iProduct['id'];
    amount: number;
}

export class Product implements iProduct {
    id: string;
    constructor(
        public card: iCard,
        public price: number,
        public stock: number,
        public description: string,
        public promotion: boolean
    ) {
        this.id = `ID-${card.suit}-${card.number}`;
    }
}

export class CartProduct implements iCartProduct {
    constructor(public id: iProduct['id'], public amount: number) {}
}
