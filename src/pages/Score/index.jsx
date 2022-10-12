import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getQuizScore } from "../../db/services";
import EmptyImg from "@/assets/empty.svg";
import { Link } from "react-router-dom";

const Score = () => {
  const { realizedQuizes } = useSelector((state) => state.user);
  if (!realizedQuizes.length) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img src={EmptyImg} width="200px" />
        <Typography>Você ainda não possui histórico</Typography>
        <Button to="/" component={Link}>
          Ver quizzes
        </Button>
      </Box>
    );
  }

  const quizesWithScore = realizedQuizes.map((q) => getQuizScore(q));
  const totalScore = quizesWithScore.reduce((acc, curr) => acc + curr.score, 0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
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
        <Paper key={quiz.quiz.id} sx={{ width: "100%", p: "10px" }}>
          <Typography variant="h6">{quiz.quiz.title}</Typography>
          <Typography variant="caption">Pontuação: {quiz.score} | </Typography>
          <Typography variant="caption">
            Perguntas: {quiz.quiz.questions.length} |{" "}
          </Typography>
          <Typography variant="caption">
            Completo: {quiz.complete ? "Sim" : "Não"}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Score;
