import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './Components/Quiz';
import { QuizProvider } from './Context/quiz';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizProvider>
  <Quiz/>
  </QuizProvider>
  </React.StrictMode>
);


