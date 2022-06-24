import { Link } from 'react-router-dom';
import { iRouterItem } from '../app/App';

export function Header({ menuOptions }: { menuOptions: Array<iRouterItem> }) {
    const template = (
        <header>
            <hgroup>
                <h1>Naipes españoles al por menor</h1>
                <h2>(pero menor, menor)</h2>
            </hgroup>
            <nav>
                <ul>
                    {menuOptions.map((item) =>
                        item.label !== 'Detalles' ? (
                            <li key={item.label}>
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ) : (
                            ''
                        )
                    )}
                </ul>
            </nav>
        </header>
    );
    return template;
}
