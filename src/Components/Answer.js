import React from 'react'

export default function Answer({ansText,onSelectAnswer,index, currentAnswer,
    correctAnswer,}) {
   const indexmapping=['A','B','C','D'];
   const isCorrectAnswer = currentAnswer && ansText === correctAnswer;
   const isWrongAnswer =
     currentAnswer === ansText && currentAnswer !== correctAnswer;
   const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
   const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
   const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
    <div  className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
     onClick={()=>onSelectAnswer(ansText)}>
        <div className='answer-letter'>{indexmapping[index]}</div>
        <div className='answer-text' >{ansText}</div>
       
        </div>

  )
}
