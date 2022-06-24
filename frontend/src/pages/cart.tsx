import { useSelector } from 'react-redux';
import { CartList } from '../components/CartList';
import { iStore } from '../store/store';

export function Cart() {
    const cartProducts = useSelector((state: iStore) => state.cartProducts);
    const template = (
        <>
            <p>Carro de la compra - Tu lista de productos</p>
            <CartList products={cartProducts}></CartList>
        </>
    );
    return template;
}

export default Cart;
