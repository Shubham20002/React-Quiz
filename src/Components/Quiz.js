import React, { useContext} from 'react';
import Question from './Question';
import { QuizContext } from '../Context/quiz';



export default function Quiz() {
    const[quizstate,dispatch]=useContext(QuizContext);
    console.log("quizstate",quizstate);
  return (
    <div className='quiz'>
        {/* result page (when showresult is true we are rendering result page) */}
        {quizstate.showResult && (
            <div className='results'>
            <div className='congratulations'>Conratulations</div>
            <div className='results-info'>
                <div>Yoy have completed the quiz</div>
                <div>You have got {quizstate.correctAnswersCount} of {quizstate.questions.length}</div>
            </div>
            <div className='next-button' onClick={()=>dispatch({type:"Restart"})}>Restart</div>
        </div>
        )}
        {/* quiz page(showresult is false then it will render) */}
        {!quizstate.showResult && (
    <div>
        <div className='score'>Question {quizstate.currentQuestionIndex+1}/{quizstate.questions.length}</div>
    <Question/>
    <div className='next-button' onClick={()=>dispatch({type:"Next_Question"})} >Next</div>
    </div>)
}
    </div>
  )
}
