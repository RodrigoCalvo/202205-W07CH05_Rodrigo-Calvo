import { useSelector } from 'react-redux';
import { List } from '../components/List';
import { iStore } from '../store/store';

export function Home() {
    const robots = useSelector((store: iStore) => store.robots);
    console.log(robots);

    const template = (
        <>
            <p>Robots</p>
            <List data={robots} />
        </>
    );
    return template;
}

export default Home;
