export const shuffleAnswers=question=>{
 const unshuffleAnswers=[
    question.correctAnswer,
    ...question.incorrectAnswers
 ]
//sorting array and returning new sorted array
 const shuffledAnswers=unshuffleAnswers.sort();
 return shuffledAnswers;
}