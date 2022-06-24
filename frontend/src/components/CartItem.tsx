import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { iCartProduct } from '../models/card';
import {
    deleteCartProductsAction,
    updateCartProductsAction,
} from '../reducers/cartProducts/cartProduct.action.creators';
import { CartProductHttpStore } from '../services/cartProduct.http.store';

export function CartItem({ product }: { product: iCartProduct }) {
    const [amount, setAmount] = useState(product.amount);
    const dispatcher = useDispatch();
    const apiCart = new CartProductHttpStore();
    function handleAmountChange(ev: SyntheticEvent) {
        const eventTarget = ev.target as HTMLFormElement;
        setAmount(eventTarget.value);
        apiCart
            .updateProduct({ ...product, amount: Number(eventTarget.value) })
            .then((resp) => dispatcher(updateCartProductsAction(resp)));
    }
    function handleDeleteClick() {
        apiCart
            .deleteProduct(product)
            .then((resp) => dispatcher(deleteCartProductsAction(product)));
    }
    const template = (
        <>
            {product.id}
            <input
                type="number"
                name="amount"
                value={amount}
                onChange={handleAmountChange}
                size={3}
                maxLength={3}
            />
            <button onClick={handleDeleteClick}>Quitar del carro</button>
        </>
    );
    return template;
}
