import { use } from 'react';
import type { Itechnology } from '../Types/types';
import Card from './Card';

type TechnologiesProps = {
    technologiesPromise: Promise<Itechnology[]>;
};

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technology = use(technologiesPromise);
    console.log(technology);
    return <div>
        <Card technology={technology}/>
    </div>;
};

export default Technologies;