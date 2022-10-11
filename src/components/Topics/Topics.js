import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics.data);
    return (
        <section>
            <div>
                <h2 className='text-4xl text-center'>Welcome to my React Router
                <br /> Brain Test Assignment.</h2>
                <p className='m-5 text-xl text-center'>Brain Test is an addictive free tricky puzzle game with a series of tricky brain teasers. Different riddles testing will challenge your mind. Get ready to take the quiz!</p>
            </div>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
        </div>
        </section>
    );
};

export default Topics;