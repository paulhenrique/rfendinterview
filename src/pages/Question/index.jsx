import {
  Box,
  Collapse,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { goToNotFound } from "@/pages/NotFound";
import useQuestionStoreHandler from "./hooks/useQuestionStoreHandler";
import { EndButtons } from "./components/EndButtons";
import { useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import "animate.css";

const helpText =
  "Houve um problema ao mostrar o enunciado dessa questão ou ele está vazio, por favor contate o suporte";

const Question = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    title: quizTitle,
    id,
  } = useSelector((state) => state.quiz);

  const { realizedQuizes } = useSelector((state) => state.user);

  const { handleUpdateQuestionAnswer } = useQuestionStoreHandler();

  if (!currentQuestion) {
    return goToNotFound();
  }

  const handleChangeSelectedOption = ({ target: { value } }) => {
    handleUpdateQuestionAnswer(value);
  };

  const getQuestionValue = () => {
    const quizRealized = realizedQuizes?.find((quiz) => quiz.idQuiz === id);
    if (!quizRealized) {
      return null;
    }
    const questionRealized = quizRealized.answers.find(
      (question) => question.idQuestion === currentQuestion.idQuestion
    );
    if (!questionRealized) {
      return null;
    }
    return questionRealized.answer;
  };

  const questionAlternativeStyle = (selected) => ({
    my: "10px",
    backgroundColor: selected ? "#f7f7bb" : "#f7f7f7",
    borderRadius: "10px",
    py: "10px",
    pl: "10px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#f7f7bb",
    },
    flex: "1",
    width: "100%",
  });

  const questionAnswerValue = getQuestionValue();

  return (
    <Box
      display="flex"
      className="animate__animated animate__fadeInUp"
      flexDirection="column"
      gap="10px"
    >
      <Typography element="h2" variant="h6">
        Questão {currentQuestionIndex + 1} | Quiz {quizTitle}
      </Typography>
      <Typography element="p" variant="body2">
        {currentQuestion?.description || helpText}
      </Typography>

      <Box>
        <RadioGroup
          value={questionAnswerValue}
          onChange={handleChangeSelectedOption}
        >
          <TransitionGroup>
            {currentQuestion?.options.map((option, index) => (
              <Collapse key={option + index}>
                <FormControlLabel
                  sx={questionAlternativeStyle(
                    questionAnswerValue
                      ? +questionAnswerValue === +index
                      : false
                  )}
                  value={index}
                  control={<Radio />}
                  label={option}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        </RadioGroup>
      </Box>
      <EndButtons />
    </Box>
  );
};

export default Question;
