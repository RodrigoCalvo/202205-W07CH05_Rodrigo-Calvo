import { iProduct } from '../models/card';

export class ProductHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3500/products/';
    }

    getProduct(id: iProduct['id']): Promise<iProduct> {
        return fetch(this.apiUrl + id.toString()).then((resp) => resp.json());
    }
    getAllProducts(): Promise<Array<iProduct>> {
        return fetch(this.apiUrl).then((resp) => resp.json());
    }
    setProduct(product: iProduct): Promise<iProduct> {
        return fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
    updateProduct(product: iProduct): Promise<iProduct> {
        return fetch(this.apiUrl + product.id, {
            method: 'PATCH',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
    deleteProduct(product: iProduct): Promise<number> {
        return fetch(this.apiUrl + product.id, { method: 'DELETE' }).then(
            (resp) => resp.json()
        );
    }
}
