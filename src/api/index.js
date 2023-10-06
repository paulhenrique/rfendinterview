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
  getQuizzes: async () => {
    try {
      const { data } = await axiosInstance.get(endpoints.quizzes);
      return data?.data;
    } catch {
      return { data: { data: [] } };
    }
  },
};

export default apiServices;
