import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import ValidateId from '../components/ValidateId';
import { loadCartProductsAction } from '../reducers/cartProducts/cartProduct.action.creators';
import { loadProductsAction } from '../reducers/products/product.action.creators';
import { CartProductHttpStore } from '../services/cartProduct.http.store';
import { ProductHttpStore } from '../services/product.http.store';

export interface iRouterItem {
    path: string;
    label: string;
    page: JSX.Element;
}

export function App() {
    const dispatcher = useDispatch();
    const apiProducts = useMemo(() => new ProductHttpStore(), []);
    const apiCart = useMemo(() => new CartProductHttpStore(), []);

    useEffect(() => {
        apiProducts
            .getAllProducts()
            .then((products) => dispatcher(loadProductsAction(products)));
    }, [apiProducts, dispatcher]);
    useEffect(() => {
        apiCart
            .getAllProducts()
            .then((products) => dispatcher(loadCartProductsAction(products)));
    }, [apiCart, dispatcher]);

    const HomePage = React.lazy(() => import('../pages/home'));
    const CategoryPage = React.lazy(() => import('../pages/category'));
    const CartPage = React.lazy(() => import('../pages/cart'));

    const routerOptions: Array<iRouterItem> = [
        { path: '/', label: 'Ofertas', page: <HomePage></HomePage> },
        {
            path: '/oros',
            label: 'Oros',
            page: <CategoryPage suit="Oros"></CategoryPage>,
        },
        {
            path: '/copas',
            label: 'Copas',
            page: <CategoryPage suit="Copas"></CategoryPage>,
        },
        {
            path: '/espadas',
            label: 'Espadas',
            page: <CategoryPage suit="Espadas"></CategoryPage>,
        },
        {
            path: '/bastos',
            label: 'Bastos',
            page: <CategoryPage suit="Bastos"></CategoryPage>,
        },
        {
            path: '/details/:id',
            label: 'Detalles',
            page: <ValidateId></ValidateId>,
        },
        {
            path: '/cart',
            label: 'Carro de la compra',
            page: <CartPage></CartPage>,
        },
    ];
    return (
        <Layout menuOptions={routerOptions}>
            <React.Suspense>
                <Routes>
                    {routerOptions.map((item) => (
                        <Route
                            key={item.label}
                            path={item.path}
                            element={item.page}
                        ></Route>
                    ))}
                </Routes>
            </React.Suspense>
        </Layout>
    );
}
