import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Question, Score } from "@/pages";

/**
 * O router faz o redirecionamento das páginas da aplicação
 * @returns
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questao/:id" element={<Question />} />
        <Route path="/score" element={<Score />} />
        <Route path="/" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
