import { Button, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import QuizzesDB from "@/db/Quizzes.json";

const Question = () => {
  const { id } = useParams();
  const { Quizzes } = QuizzesDB;
  const selectedQuiz = Quizzes.find(({ questions }) =>
    questions.find((question) => question.idQuestion === id)
  );
  const selectedQuestion = selectedQuiz.questions.find(
    (question) => question.idQuestion === id
  );

  const indexOfSelectedQuestion = selectedQuiz.questions
    .map((e) => JSON.stringify(e))
    .indexOf(JSON.stringify(selectedQuestion));

  // TODO: verificar que quando for a última posição do array, o próximo deve enviar para a posição 0 (o inverso acontece quando for o botão de voltar)
  const nextQuestionId =
    selectedQuiz.questions[indexOfSelectedQuestion + 1]?.idQuestion;

  return (
    <Typography>
      <div>Página de questão, aqui poderá ser respondida uma questão</div>
      <pre>
        {JSON.stringify(
          { indexOfSelectedQuestion, nextQuestionId, selectedQuestion },
          null,
          2
        )}
      </pre>
      <Button
        component={Link}
        to={`/questao/${nextQuestionId}`}
        variant="contained"
      >
        Próxima Questão
      </Button>
    </Typography>
  );
};

export default Question;
