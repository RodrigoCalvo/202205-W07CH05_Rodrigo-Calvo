import { Link } from 'react-router-dom';
import { iRobot } from '../models/robot';

export function RobotCard({ robot }: { robot: iRobot }) {
    const template = (
        <>
            <Link to={'../details/' + robot._id}>{robot.name}</Link>
            <button>Borrar</button>
        </>
    );
    return template;
}
