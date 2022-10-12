import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statistic from '../Statistic/Statistic';

const Statistics = () => {
    const statistics = useLoaderData();
    console.log(statistics);
    return (
        <section>
            {
                statistics.data.map(statistic => <Statistic
                    key={statistic.id}
                    statistic={statistic}
                ></Statistic>)
            }
        </section>
    );
};

export default Statistics;