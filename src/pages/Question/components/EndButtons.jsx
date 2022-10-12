import { Box, Button, Collapse } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const EndButtons = () => {
  const { currentQuestionIndex, questions } = useSelector(
    (state) => state.quiz
  );
  const left = currentQuestionIndex - 1;
  const right = currentQuestionIndex + 1;
  const previousQuestion = questions[left]?.idQuestion;
  const nextQuestion = questions[right]?.idQuestion;

  return (
    <Box display="flex" justifyContent="space-between">
      <Collapse in={Boolean(previousQuestion)}>
        <Button
          component={Link}
          to={`/questao/${previousQuestion}`}
          variant="contained"
        >
          Questão anterior
        </Button>
      </Collapse>
      <Collapse in={Boolean(nextQuestion)}>
        <Button
          component={Link}
          to={`/questao/${nextQuestion}`}
          variant="contained"
        >
          Próxima Questão
        </Button>
      </Collapse>
    </Box>
  );
};
