import axios from "axios";

const API_KEY = "02b1670a06e44ffcbd3c2af5107acc61";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export const fetchNews = async (category: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        category: category,
        country: "us",
        apiKey: API_KEY,
      },
    });
    return response.data.articles.filter(
      (article: Article) => article.urlToImage !== null,
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
