import axios from "axios";

const API_KEY = "02b1670a06e44ffcbd3c2af5107acc61";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const fetchTopHeadlines = async (source: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        sources: source,
        apiKey: API_KEY,
      },
    });
    return response.data.articles; 
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return [];
  }
};
