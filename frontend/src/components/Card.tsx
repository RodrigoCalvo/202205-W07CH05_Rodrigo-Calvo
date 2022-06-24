import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartProduct, iProduct } from '../models/card';
import { addCartProductsAction } from '../reducers/cartProducts/cartProduct.action.creators';
import { CartProductHttpStore } from '../services/cartProduct.http.store';
import { iStore } from '../store/store';

export function Card({ product }: { product: iProduct }) {
    const cartProducts = useSelector((state: iStore) => state.cartProducts);
    const [amount, setAmount] = useState(1);
    const [alreadyAdded, setAlreadyAdded] = useState(false);
    const dispatcher = useDispatch();
    function handleAmountChange(ev: SyntheticEvent) {
        const eventTarget = ev.target as HTMLFormElement;
        setAmount(eventTarget.value);
    }
    useEffect(() => {
        setAlreadyAdded(
            Boolean(cartProducts.find((cartItem) => cartItem.id === product.id))
        );
    }, [cartProducts, product.id]);

    function handleAddClick() {
        if (!cartProducts.find((cartItem) => cartItem.id === product.id)) {
            const cartApi = new CartProductHttpStore();
            const newCartProduct = new CartProduct(product.id, amount);
            cartApi.setProduct(newCartProduct).then((resp) => {
                dispatcher(addCartProductsAction(resp));
                setAlreadyAdded(true);
            });
        } else {
            setAlreadyAdded(true);
        }
    }
    const template = (
        <>
            <Link to={'../details/' + product.id}>{product.id}</Link> -{' '}
            {product.card.number} - {product.card.suit} -
            <input
                type="number"
                name="amount"
                value={amount}
                onChange={handleAmountChange}
                size={3}
                maxLength={3}
                min={0}
            />
            <button onClick={handleAddClick}>
                {alreadyAdded ? 'Ya en su carro' : 'Añadir al carro'}
            </button>
        </>
    );
    return template;
}
