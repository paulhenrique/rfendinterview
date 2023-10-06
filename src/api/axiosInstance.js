import axios from "axios";

/**
 * Define uma instancia do axios com a baseURL definida
 */
export const axiosInstance = axios.create({
  baseURL: "/api",
});

export default axiosInstance;
