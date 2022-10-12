import React from 'react';

const Statistic = ({ statistic }) => {
    const { id, name, total } = statistic;
    console.log(statistic)
    return (
        <div>
            <h3>total{total}</h3>
            <h2>id: {id}</h2>
            <h2>name: {name}</h2>
        </div>
    );
};

export default Statistic;