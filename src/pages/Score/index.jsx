import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getQuizScore } from "../../db/services";
import "animate.css";
import EmptyState from "./components/EmptyState";
import QuizCard from "./components/QuizCard";

const Score = () => {
  const { realizedQuizes } = useSelector((state) => state.user);
  if (!realizedQuizes.length) {
    return <EmptyState />;
  }

  const quizesWithScore = realizedQuizes.map((q) => getQuizScore(q));
  const totalScore = quizesWithScore.reduce((acc, curr) => acc + curr.score, 0);

  return (
    <Box
      className="animate__animated animate__fadeInUp"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        pb: 15,
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ mb: 0, pb: 0 }}>
          Histórico
        </Typography>
        <Typography variant="body2" sx={{ mt: 0, pt: 0 }}>
          Quantidade de quizzes realizados: {realizedQuizes.length}; Média de
          acertos: {totalScore / realizedQuizes.length}
        </Typography>
      </Box>
      {quizesWithScore.map((quiz) => (
        <QuizCard quiz={quiz} key={quiz.quiz.id} />
      ))}
    </Box>
  );
};

export default Score;
