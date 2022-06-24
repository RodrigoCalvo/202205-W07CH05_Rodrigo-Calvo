import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iStore } from '../store/store';

export function Details({ id }: { id: string }) {
    //Intento de hacer un diccionario
    // const dictionary = {
    //     0: 'Rey',
    //     9: 'Caballo',
    //     8: 'Sota',
    //     7: 'Siete',
    //     6: 'Seis',
    //     5: 'Cinco',
    //     4: 'Cuatro',
    //     3: 'Tres',
    //     2: 'Dos',
    //     1: 'Uno',
    // };
    //dictionary[detailsProduct.card.number];
    // Element implicitly has an 'any' type because expression of type 'number' can't be used to index type '{ 0: string; 9: string; 8: string; 7: string; 6: string; 5: string; 4: string; 3: string; 2: string; 1: string; }'.
    // No index signature with a parameter of type 'number' was found on type '{ 0: string; 9: string; 8: string; 7: string; 6: string; 5: string; 4: string; 3: string; 2: string; 1: string; }'
    const products = useSelector((store: iStore) => store.products);
    const detailsProduct = products.find((item) => item.id === id);
    const navigate = useNavigate();
    function handleClick() {
        navigate(-1);
    }
    const template = (
        <>
            {detailsProduct ? (
                <>
                    <p>
                        {detailsProduct.card.number} de{' '}
                        {detailsProduct.card.suit}
                    </p>
                    <p>
                        ID: {detailsProduct.id} - Precio: {detailsProduct.price}{' '}
                        dineros. Actualmente {detailsProduct.stock} en stock.
                    </p>
                    <p>{detailsProduct.description}</p>
                    <p>{detailsProduct.promotion}</p>
                </>
            ) : (
                'El producto con esa ID no está disponible actualmente'
            )}
            <button onClick={handleClick}>Volver</button>
        </>
    );
    return template;
}

export default Details;
