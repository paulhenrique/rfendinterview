import React from "react";
import Quizzes from "@/db/Quizzes.json";
import { Button, Box, TextField, Collapse } from "@mui/material";
import { Link } from "react-router-dom";
import { matchSorter } from "match-sorter";
import { TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../../store/features/user";

/**
 * Onde são listados os Quizzes
 * @returns
 */
const Home = () => {
  const { search } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const setSearch = (e) => {
    dispatch(updateSearch(e));
  };
  const sorteredList = matchSorter(Quizzes.Quizzes, search, {
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
        <TextField
          label="Buscar..."
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
        />
        <TransitionGroup>
          {(search ? sorteredList : Quizzes.Quizzes).map(
            ({ title, questions }, i) => (
              <Collapse key={i} sx={{ width: "100%" }}>
                <Button
                  sx={{ width: "100%", my: 1 }}
                  key={i}
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

export default Home;
