import { iRobot } from '../models/robot';
import { RobotCard } from './Card';

export function List({ data }: { data: Array<iRobot> }) {
    const template = (
        <ul>
            {data.map((item) => (
                <li key={item._id}>
                    <RobotCard robot={item} />
                </li>
            ))}
        </ul>
    );
    return template;
}
