import apiServices from "..";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = "quizzes";

/**
 * @description Hook para buscar os quizzes
 * @returns {import("@tanstack/react-query").UseQueryResult}
 */
export const useQuizzes = () => {
  const getService = apiServices.getQuizzes;
  return useQuery([QUERY_KEY], getService);
};

export default useQuizzes;
