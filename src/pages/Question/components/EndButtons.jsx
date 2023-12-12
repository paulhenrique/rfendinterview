import { Box, Button, Collapse, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuestionGetter } from "../hooks/useQuestionStoreHandler";
// import { useParams } from "react-router-dom";
import useQuizzes from "@/api/hooks/useQuizzes";

export const EndButtons = () => {
  const { id } = useSelector((state) => state.quiz);
  const { realizedQuizes } = useSelector((state) => state.user);
  const { data: question, isLoading: isLoadingQuestion } = useQuestionGetter();
  const { data: quizzes, isLoading } = useQuizzes("");

  if (isLoading || isLoadingQuestion) {
    return null;
  }

  const quiz = (quizzes ?? [])?.find((e) => e.id === question?.quizId);

  const questions = quiz?.questions ?? [];

  const previousQuestion = question?.prevQuestionId;
  const nextQuestion = question?.nextQuestionId;

  const foundQuiz = realizedQuizes?.find((item) => {
    return question.quizId === item.idQuiz;
  });

  const allQuestionsAnswered = foundQuiz?.answers?.length === questions.length;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyItems: "end",
      }}
    >
      <Collapse in={Boolean(previousQuestion)} sx={{ justifySelf: "start" }}>
        <Button
          component={Link}
          to={`/questao/${previousQuestion}`}
          variant="contained"
        >
          Anterior
        </Button>
      </Collapse>
      <Box>
        <Collapse in={Boolean(nextQuestion)}>
          <Button
            component={Link}
            to={`/questao/${nextQuestion}`}
            variant="contained"
          >
            Próxima
          </Button>
        </Collapse>
        <Collapse in={!nextQuestion}>
          <Tooltip
            title={
              !allQuestionsAnswered
                ? "Você precisa responder todas as questões para finalizar o quiz"
                : ""
            }
          >
            <span>
              <Button
                color={"success"}
                disabled={!allQuestionsAnswered}
                component={Link}
                to={encodeURI(`/historico?selectedQuiz=${id}`)}
                variant="contained"
              >
                Finalizar
              </Button>
            </span>
          </Tooltip>
        </Collapse>
      </Box>
    </Box>
  );
};
