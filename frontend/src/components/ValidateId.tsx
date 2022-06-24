import { useParams } from 'react-router-dom';
import Details from '../pages/details';
import { NotFound } from './NotFound';

export function ValidateId() {
    const { id } = useParams();
    const detailRegex = /^(ID-)(Oros|Copas|Espadas|Bastos)-\d$/;

    if (id?.match(detailRegex)) {
        return <Details id={id} />;
    } else {
        return <NotFound />;
    }
}

export default ValidateId;
