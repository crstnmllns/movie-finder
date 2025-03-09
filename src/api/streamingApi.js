import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

const apiClient = axios.create({
  baseURL: `https://${API_HOST}`,
  headers: {
    "x-rapidapi-host": API_HOST,
    "x-rapidapi-key": API_KEY,
  },
});

export const searchMovie = async (title, country = "cl", language = "es") => {
  try {
    const response = await apiClient.get("shows/search/title", {
      params: {
        title,
        country,
        show_type: "movie",
        output_language: language,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al obtener datos de la API", error);
    return null;
  }
};
