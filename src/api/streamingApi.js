import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_HOST;

export const searchMovie = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}autocomplete-search/`, {
      params: {
        apiKey: API_KEY,
        search_value: query,
        search_type: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error al obtener datos de la API", error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}title/${id}/details/`, {
      params: {
        apiKey: API_KEY,
        append_to_response: "sources",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos detallados de la API", error);
    return null;
  }
};

export const getPlatforms = async () => {
  try {
    const response = await axios.get(`${BASE_URL}sources/`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener las plataformas", error);
    return [];
  }
};