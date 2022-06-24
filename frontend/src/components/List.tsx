import { iProduct } from '../models/card';
import { Card } from './Card';

export function List({ products }: { products: Array<iProduct> }) {
    const template = (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Card product={product} />
                </li>
            ))}
        </ul>
    );
    return template;
}
