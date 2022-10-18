import React from "react";
import Quizzes from "@/db/Quizzes.json";
import { Button, Box, TextField, Collapse, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { matchSorter } from "match-sorter";
import { TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "@/store/features/user";

/**
 * Onde são listados os Quizzes
 * @returns
 */
const ListQuizzes = () => {
  const { search, name } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const setSearch = (e) => {
    dispatch(updateSearch(e));
  };
  const sortedList = matchSorter(Quizzes.Quizzes, search, {
    keys: ["title"],
  });
  return (
    <>
      <Box
        className="animate__animated animate__fadeInUp"
        display="flex"
        flexDirection="column"
        gap="20px"
      >
        <Box>
          <Typography variant="h4">Olá, {name}</Typography>
          <Typography variant="subtitle1">
            Você pode entrar em um quiz escolhendo uma das opções abaixo
          </Typography>
        </Box>
        <TextField
          label="Buscar..."
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
        />
        <TransitionGroup>
          {(search ? sortedList : Quizzes.Quizzes).map(
            ({ title, questions }) => (
              <Collapse key={title} sx={{ width: "100%" }}>
                <Button
                  sx={{ width: "100%", my: 1 }}
                  component={Link}
                  to={`/questao/${questions[0]?.idQuestion}`}
                  variant="contained"
                >
                  {title}
                </Button>
              </Collapse>
            )
          )}
        </TransitionGroup>
      </Box>
    </>
  );
};

export default ListQuizzes;
