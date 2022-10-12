import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OptionQuiz = () => {
    const optionsData = useLoaderData()
    const options = optionsData.data;
    // console.log(options);

    const handleCorrectAnswer = (correctAnswer) => {
        toast(`The Correct Ans: ${correctAnswer}`,
            { position: toast.POSITION.TOP_CENTER, autoClose: 1500 }
        );
    };

    const handleOption = (op, correctAnswer) => {
        op === correctAnswer ? toast('Correct', { position: toast.POSITION.TOP_LEFT, autoClose: 2000 }) : toast('Incorrect', {autoClose:2000})
    }

    return (
        <div>
            <h3 className='text-center text-3xl text-rose-500'>Quiz of {options.name}</h3>
            {
                options.questions.map(option => <QuizQuestion
                    key={option.id}
                    option={option}
                ></QuizQuestion>)
            }
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default OptionQuiz;