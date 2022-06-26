import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { iStore } from '../store/store';

export function Details({ id }: { id: string }) {
    const products = useSelector((store: iStore) => store.robots);
    const detailsProduct = products.find((item) => item._id === id);
    const navigate = useNavigate();
    function handleClick(ev: SyntheticEvent) {
        const eventTarget = ev.target as HTMLElement;
        if (eventTarget.innerText === 'Volver') navigate('../');
    }
    const template = (
        <>
            {detailsProduct ? (
                <>
                    <img
                        src={detailsProduct.image}
                        alt={`Imagen de ${detailsProduct.name}`}
                    />
                    <p>Nombre: {detailsProduct.name}</p>
                    <p>Resistencia: {detailsProduct.life}</p>
                    <p>Velocidad: {detailsProduct.speed}</p>
                    <p>Fecha de construcción: {detailsProduct.born}</p>
                    <button onClick={handleClick}>Volver</button>
                    <Link to="./edit">
                        <button>Editar</button>
                    </Link>
                </>
            ) : (
                'El producto con esa ID no está disponible actualmente'
            )}
        </>
    );
    return template;
}

export default Details;
