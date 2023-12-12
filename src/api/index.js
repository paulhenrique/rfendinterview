import axiosInstance from "./axiosInstance";
import endpoints from "./endpoints";

export const apiServices = {
  getMarvelHeroesName: async () => {
    try {
      const { data } = await axiosInstance.get(endpoints.marvelHeroesNames);
      return data?.data;
    } catch {
      return { data: { data: [] } };
    }
  },
  getQuizzes: (search) => async () => {
    try {
      const { data } = await axiosInstance.get(
        `${endpoints.quizzes}?search=${search}`
      );
      return data?.data;
    } catch {
      return { data: { data: [] } };
    }
  },
  getQuestion: (questionId) => async () => {
    try {
      const { data } = await axiosInstance.get(
        `${endpoints.question.replace(":questionId", questionId)}`
      );
      return {
        ...data?.data,
        quizId: data?.data.quizId.split(".")[0],
      };
    } catch {
      return { data: { data: [] } };
    }
  },
};

export default apiServices;
