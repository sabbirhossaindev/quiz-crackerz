import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OptionQuiz = () => {
    const topic = useLoaderData()
    console.log(topic)
    return (
        <div>
            <h2>OptionQuiz Compo</h2>
        </div>
    );
};

export default OptionQuiz;