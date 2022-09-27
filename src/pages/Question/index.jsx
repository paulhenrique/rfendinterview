import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Question = () => {
  const { name } = useSelector((state) => state.user);
  const { id } = useParams();

  return (
    <Typography>
      <div>Página de questão, aqui poderá ser respondida uma questão</div>
      {JSON.stringify({ name, id }, null, 2)}
    </Typography>
  );
};

export default Question;
