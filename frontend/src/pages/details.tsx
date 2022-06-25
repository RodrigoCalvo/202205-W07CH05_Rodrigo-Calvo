import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iStore } from '../store/store';

export function Details({ id }: { id: string }) {
    const products = useSelector((store: iStore) => store.robots);
    const detailsProduct = products.find((item) => item._id === id);
    const navigate = useNavigate();
    function handleClick() {
        navigate(-1);
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
