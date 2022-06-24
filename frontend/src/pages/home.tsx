import { useSelector } from 'react-redux';
import { List } from '../components/List';
import { iStore } from '../store/store';

export function Home() {
    const products = useSelector((store: iStore) => store.products);
    const template = (
        <>
            <p>Promociones</p>
            <List products={products.filter((item) => item.promotion)} />
        </>
    );
    return template;
}

export default Home;
