import React from "react";
import Router from "@/router";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Box, CssBaseline } from "@mui/material";
import AppBar from "@/components/AppBar";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ClearUserHandler from "../components/ClearUserHandler";
import ChangeThemeMotor from "../components/ChangeThemeMotor";
import ChangeThemeHandler from "../components/ChangeThemeHandler";
import ShareHandler from "../components/ShareHandler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Quizzes from "@/db/Quizzes.json";

const persistor = persistStore(store);

const queryClient = new QueryClient();

import { createServer } from "miragejs";
import { matchSorter } from "match-sorter";

let server = createServer({
  namespace: "/api",
});

server.get("/marvel-heroes-names", {
  data: ["Steve Rogers", "Tony Stark", "Natasha Romanova", "Jennifer Walters"],
});

server.get("/quizzes", (_e, request) => {
  let data = Quizzes.Quizzes;

  const search = request?.queryParams?.search;

  if (search) {
    data = matchSorter(data, search, {
      keys: ["title"],
    });
  }

  return {
    data,
  };
});

server.get("/question/:questionId", (_e, request) => {
  const questionId = request?.params?.questionId;
  const allQuestions = Quizzes.Quizzes.flatMap(({ questions, id, title }) =>
    questions.map((question, index) => ({
      ...question,
      index,
      quizId: id,
      quizTitle: title,
      nextQuestionId:
        index + 1 > questions.length
          ? questions[0]?.idQuestion
          : questions[index + 1]?.idQuestion,
      prevQuestionId:
        index - 1 < 0
          ? questions[questions.length - 1]?.idQuestion
          : questions[index - 1]?.idQuestion,
    }))
  );

  return {
    data: allQuestions.find(
      (question) => question.idQuestion === questionId
    ) ?? {
      title: "Pergunta não encontrada",
      description: "Pergunta não encontrada",
      questionId,
      allQuestions,
      alternatives: [],
    },
  };
});

const App = () => {
  return (
    <SnackbarProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <QueryClientProvider client={queryClient}>
            <ChangeThemeMotor>
              <CssBaseline />
              <ClearUserHandler />
              <ChangeThemeHandler />
              <ShareHandler />
              <Box
                sx={{
                  maxWidth: {
                    md: "50%",
                    sm: "70%",
                    xs: "90%",
                  },
                  pt: "104px",
                  mx: "auto",
                  minHeight: "100vh",
                }}
              >
                <Router excedent={<AppBar />} />
              </Box>
            </ChangeThemeMotor>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SnackbarProvider>
  );
};

export default App;
