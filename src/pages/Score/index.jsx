import { Box, Typography } from "@mui/material";
import React from "react";
import "animate.css";
import QuizCard from "./components/QuizCard";
import { useScore } from "@/hooks/useScore";

const Score = () => {
  const { countHitsInPercent, quizesWithScore, countRealizedQuizes } =
    useScore();
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
          Quantidade de quizzes realizados: {countRealizedQuizes}; Acertos:{" "}
          {countHitsInPercent}
        </Typography>
      </Box>
      {quizesWithScore.map((quiz) => (
        <QuizCard quiz={quiz} key={quiz.quiz.id} />
      ))}
    </Box>
  );
};

export default Score;
