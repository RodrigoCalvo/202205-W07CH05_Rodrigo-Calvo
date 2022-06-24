import { iCartProduct } from '../models/card';
import { CartItem } from './CartItem';

export function CartList({ products }: { products: Array<iCartProduct> }) {
    const template = (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <CartItem product={product} />
                </li>
            ))}
        </ul>
    );
    return template;
}
