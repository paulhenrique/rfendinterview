import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getQuizScore } from "../../db/services";

const Score = () => {
  const { realizedQuizes } = useSelector((state) => state.user);
  if (!realizedQuizes.length) {
    return (
      <>
        <Typography>Você ainda não possui histórico</Typography>
      </>
    );
  }

  return (
    <div>
      <pre>
        {JSON.stringify(
          { quizes: realizedQuizes.map((q) => getQuizScore(q)) },
          null,
          2
        )}
      </pre>
    </div>
  );
};

export default Score;
