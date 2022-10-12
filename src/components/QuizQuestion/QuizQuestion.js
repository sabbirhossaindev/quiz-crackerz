import React from 'react';

const QuizQuestion = ({option, handleCorrectAnswer, handleOption}) => {
    const { correctAnswer, options, id, question } = option;
    console.log(option);
    return (
        <section>
            {/* <h1>Quiz Topic of : {id}</h1> */}
            <div className='w-3/4 mx-auto border border-solid m-5 p-4 rounded-lg shadow-xl'>
                <div className='flex justify-between bg-purple-300 my-4 text-2xl font-semibold p-2 border-0 rounded-lg'>
                    <h1>{question.slice(3,-4)}</h1>
                    <button onClick={() => handleCorrectAnswer(correctAnswer)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    </button>
                </div>
                <div className='option text-lg font-medium space-y-4 text-center'>
                    <div onClick={() => handleOption(option[0], correctAnswer)} className='border-0 bg-red-300 p-3 rounded-lg shadow-xl'>{options[0]}</div>
                    <div onClick={() => handleOption(option[1], correctAnswer)} className='border-0 bg-red-300 p-3 rounded-lg shadow-xl'>{options[1]}</div>
                    <div onClick={() => handleOption(option[2], correctAnswer)} className='border-0 bg-red-300 p-3 rounded-lg shadow-xl'>{options[2]}</div>
                    <div onClick={() => handleOption(option[3], correctAnswer)} className='border-0 bg-red-300 p-3 rounded-lg shadow-xl'>{options[3]}</div>
                </div>
            </div>
        </section>
    );
};

export default QuizQuestion;