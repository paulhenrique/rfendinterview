import React from "react";
import Quizzes from "@/db/Quizzes.json";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * Onde são listados os Quizzes
 * @returns
 */
const Home = () => {
  return (
    <>
      <Box
        className="animate__animated animate__fadeInUp"
        display="flex"
        flexDirection="column"
        gap="20px"
      >
        {Quizzes.Quizzes.map(({ title, questions }, i) => (
          <Button
            key={i}
            component={Link}
            to={`/questao/${questions[0]?.idQuestion}`}
            variant="contained"
          >
            {title}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default Home;
