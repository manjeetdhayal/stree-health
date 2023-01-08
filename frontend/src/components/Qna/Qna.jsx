import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Qna = () => {
    const [questions, setQuestions] = useState([]);

    const fetchAllQuestions = async () => {
        const response = await fetch('https://stree-health-production.up.railway.app/api/qna');
        const json = await response.json();
        setQuestions(json);
    }

    useEffect(() => {
        fetchAllQuestions();
    }, []);
    
  return (
    <div className='flex justify-center items-center text-white flex-col'>
        <h2>Q&A</h2>
        <div className='questions flex w-[80%] justify-center items-center mt-10 flex-col'>
           {questions.map((question => {
            return (
                <div key={question._id} className="question my-10">
                    <div className="qtext">
                        Q.&nbsp; <b>{question.questionText}</b>
                    </div>
                    <div className={`atext ${question.answers[0] ? 'border-purple-500 border-2' : ''} mt-4 p-5`}>
                        {question.answers[0] ? question.answers[0] : 'No answers yet!'}
                    </div>
                </div>
            );
           }))}
        </div>
    </div>
  )
}

export default Qna