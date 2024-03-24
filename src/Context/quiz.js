import { createContext,useReducer } from "react";
import data from '../data.js'
import {shuffleAnswers} from '../helper.js'

const initialstate={
    currentQuestionIndex:0,
    questions:data,
    showResult:false,
    answers:shuffleAnswers(data[0]),
    currentAnswer: "",
  correctAnswersCount: 0,
};
const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type==="SELECT_ANSWER"){
        const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;

          return {
            ...state,
            currentAnswer: action.payload,
            correctAnswersCount,
          };
    }
    if(action.type==="Next_Question"){
    const showResult=state.currentQuestionIndex ===state.questions.length-1;
    //here we are changeing currentquestionindex only when showresult is false
    const currentQuestionindx= showResult ? 
    state.currentQuestionIndex : state.currentQuestionIndex+1;
    const answers= showResult ? []: shuffleAnswers(state.questions[currentQuestionindx]);
        return{...state,
            currentQuestionIndex:currentQuestionindx,
            showResult,
            answers,
            currentAnswer: "",
        }
    }
    if(action.type==="Restart"){
        return initialstate;
    }
    return state;
};

export const QuizContext=createContext();

//this quizprovider will provide to entire appliaction(inside index.js)
export const QuizProvider=({children})=>{
    //here useReducer will return array with state and dispacher
    const value=useReducer(reducer,initialstate);
   return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}