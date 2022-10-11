import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OptionQuiz = ({params}) => {
    const topic = useLoaderData()
    console.log(topic);
    return (
        <div>
            <h2 className='text-center text-4xl'>OptionQuiz Compo</h2>
        </div>
    );
};

export default OptionQuiz;