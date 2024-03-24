import React from 'react';
import Answer from './Answer';
import { QuizContext } from '../Context/quiz';
import { useContext } from 'react';

export default function Question() {
    const[quizstate,dispatch]=useContext(QuizContext);
    const currentquestion=quizstate.questions[quizstate.currentQuestionIndex];
    console.log(quizstate,"currentquestion");
  return (
    <div>
    <div className='question'>{currentquestion.question}</div>
    <div className='answers'>
    {quizstate.answers.map((answer,index)=>(
        <Answer ansText={answer} key={index} index={index} 
        currentAnswer={quizstate.currentAnswer}
            correctAnswer={currentquestion.correctAnswer}
        onSelectAnswer={(answerText)=>dispatch({type:'SELECT_ANSWER',payload:answerText})}/>
    ))}
    </div>
    
    </div>
  )
}
