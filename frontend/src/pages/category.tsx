import { useSelector } from 'react-redux';
import { List } from '../components/List';
import { DeckSuit } from '../models/card';
import { iStore } from '../store/store';

export function Category({ suit }: { suit: DeckSuit }) {
    const products = useSelector((store: iStore) => store.products);
    const template = (
        <>
            <p>Categoria {suit}</p>
            <List
                products={products.filter((item) => item.card.suit === suit)}
            />
        </>
    );
    return template;
}

export default Category;
