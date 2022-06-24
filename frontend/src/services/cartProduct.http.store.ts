import { iCartProduct } from '../models/card';

export class CartProductHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3500/cartProducts/';
    }

    getProduct(id: iCartProduct['id']): Promise<iCartProduct> {
        return fetch(this.apiUrl + id.toString()).then((resp) => resp.json());
    }
    getAllProducts(): Promise<Array<iCartProduct>> {
        return fetch(this.apiUrl).then((resp) => resp.json());
    }
    setProduct(product: iCartProduct): Promise<iCartProduct> {
        return fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
    updateProduct(product: iCartProduct): Promise<iCartProduct> {
        return fetch(this.apiUrl + product.id, {
            method: 'PATCH',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
    deleteProduct(product: iCartProduct): Promise<number> {
        return fetch(this.apiUrl + product.id, {
            method: 'DELETE',
        }).then((resp) => resp.json());
    }
}
