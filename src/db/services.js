import QuizzesDB from "@/db/Quizzes.json";

export const getSelectedQuestion = (selectedQuiz, id) => [
  selectedQuiz?.questions.find((question) => question.idQuestion === id),
  selectedQuiz?.questions.findIndex((question) => question.idQuestion === id),
];

export const getSelectedQuizByQuestionId = (id) => {
  const { Quizzes } = QuizzesDB;
  return Quizzes?.find(({ questions }) =>
    questions.find((question) => question.idQuestion === id)
  );
};

export const getQuestionId = (selectedQuiz) => (index) => {
  if (index > selectedQuiz?.questions?.lenght) {
    return getQuestionId(0);
  }
  return selectedQuiz.questions[index]?.idQuestion;
};
