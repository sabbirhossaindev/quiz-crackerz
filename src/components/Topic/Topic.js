import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const {id, logo, name, total } = topic;
    return (
        <section>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img className='bg-gray-400 text-white' src={logo} alt="logo" />
                </figure>
                <div className="card-body">
                <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-between items-center">
                        <h3>{ name}</h3>
                        <h3>{ total}</h3>
                        <button className="btn btn-primary">Go<Link to={`/topic/${id}`}>{id}</Link><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Topic;